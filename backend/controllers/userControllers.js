import asyncHandler from 'express-async-handler';
import User from "../models/userModels.js";

export const authUser = asyncHandler(async(req,res) => {

  res.status(200).json({message: 'Auth User'})
});

export const registerUser = asyncHandler(async(req,res) => {
  const {name, email, password} = req.body;

  const userExists = await User.findOne({email});

  if(userExists) {
    res.status(400);
    throw new Error('User Already Exists!')
  }

  const user = await User.create({
    name, email, password
  });

  if(user) {
    res.status(201).json({ 
      _id:user._id,
      name: user.name,
      email: user.email
    })
  } else {
    res.status(400);
    throw new Error('Invalid user data!')
  }
  
});

export const logoutUser = asyncHandler(async(req,res) => {

  res.status(200).json({message: 'Logout User'})
});

export const getUserProfile = asyncHandler(async(req,res) => {

  res.status(200).json({message: 'Get User Profile'})
});

export const updateUserProfile = asyncHandler(async(req,res) => {

  res.status(200).json({message: 'Update User Profile'})
});