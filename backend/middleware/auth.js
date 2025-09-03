const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const express = require("express");
const { models } = require("mongoose");

const protect = (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log(`decoded object ${decoded}`);
      req.user = decoded;
      next();
    } catch (error) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
  }
};

const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    
    
    if (!roles.includes(req.user.role)) {
      console.log(roles, req.user.role);
      
      return res.status(403).json({ msg: `User role ${req.user.role} is not authorized to access this route` });
    }
    next();
  };
};

module.exports = { protect, authorizeRoles };