import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IDE_HTML from './IDEHTML';



const twoSum = () =>{
  return(
    <div>
      <a href="/home">home</a>
      <h1>Two Sum</h1>
      
      <p>Given an array of integers <code>nums</code>&nbsp;and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to 
        <code>target</code></em>.
        </p>
        <p>You may assume that each input would have <strong><em>exactly</em> one solution</strong>, 
        and you may not use the <em>same</em> element twice.
        </p>
      <IDE_HTML /> 
    </div>
  )
}

const IntToRomanNumeral = () =>{
  return(
    <div>
        <a id='home-tag' href="/home">home</a>
      <h1>Int To Roman Numeral</h1>
    
      <p>Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.
        </p>
        <p>Roman numerals are represented by seven different symbols:&nbsp;<code>I</code>, 
      <code>V</code>, <code>X</code>, <code>L</code>, <code>C</code>, <code>D</code> and <code>M</code>.
      </p>
      <pre><strong>Symbol</strong>       <strong>Value</strong>
I             1
V             5
X             10
L             50
C             100
D             500
M             1000</pre>
<p>For example,&nbsp;<code>2</code> is written as <code>II</code>&nbsp;in Roman numeral, just two ones added together. 
<code>12</code> is written as&nbsp;<code>XII</code>, which is simply <code>X + II</code>. The number
 <code>27</code> is written as <code>XXVII</code>, which is <code>XX + V + II</code>.</p>
 <p>Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not <code>IIII</code>. Instead, the number four is written as <code>IV</code>.
  Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as <code>IX</code>. There are six instances where subtraction is used:</p>
        <IDE_HTML />  
    </div>
  )
}

const PalindromeNumber = () =>{
  return(
    <div>
      <h1>Palindrome Number</h1>
      <a href="/home">home</a>
      <p>Given an integer <code>x</code>, return <code>true</code> if <code>x</code> is palindrome integer.
        </p>
        <p>An integer is a <strong>palindrome</strong> when it reads the same backward as forward. For example, <code>121</code> is palindrome while <code>123</code> is not.
        </p>
        <IDE_HTML /> 
    </div>
  )
}

const MedianOfTwoSortedArrays = () => {
  return(
    <div>
      <a href="/home">home</a>
      <h1>Median Of Two Sorted Arrays</h1>
      
      <p>Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
        </p>
        <IDE_HTML />  
    </div>
  )
}

const addTwoNumbers = () => {
  return(
    <div>
      <a href="/home">home</a>
      <h1>Add Two Numbers</h1>
     
      <p>You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
        </p>
        <IDE_HTML /> 
    </div>
  )
}

const LongestSubstringWithoutRepeatingCharacters = () => {
  return(
    <div>
      <a href="/home">home</a>
      <h1>Longest Substring Without Repeating Characters</h1>
      
      <p>Given a string s, find the length of the longest substring without repeating characters.
        </p>
        <IDE_HTML />  
    </div>
  )
}

const RemoveDuplicatesFromSortedArray = () => {
  return(
    <div>
      <a href="/home">home</a>
      <h1>Remove Duplicates from Sorted Array</h1>
      
      <p>Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
        </p>
        <IDE_HTML />  
    </div>
  )
}

const MergeTwoSortedLists = () => {
  return(
    <div>
      <a href="/home">home</a>
      <h1>Merge Two Sorted Lists</h1>
      
      <p>Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.
        </p>
        <IDE_HTML />  
    </div>
  )
}

const removeElement = () => {
  return(
    <div>
      <a href="/home">home</a>
      <h1>Remove Element</h1>
      
      <p>Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.
        </p>
        <IDE_HTML />  
    </div>
  )
}

const searchPosistion = () => {
  return(
    <div>
      <a href="/home">home</a>
      <h1>Search Insert Position</h1>
      
      <p>Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
        </p>
        <IDE_HTML />  
    </div>
  )
}

const lastWordLength = () => {
  return(
    <div>
      <a href="/home">home</a>
      <h1>Length of Last Word</h1>
      
      <p>Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.
        </p>
        <IDE_HTML />  
    </div>
  )
}

const climbingStairs = () => {
  return(
    <div>
      <a href="/home">home</a>
      <h1>Climbing Stairs</h1>
      
      <p>You are climbing a staircase. It takes n steps to reach the top.
        </p>
        <IDE_HTML />  
    </div>
  )
}

const removeDuplicates = () => {
  return(
    <div>
      <a href="/home">home</a>
      <h1>Remove Duplicates from Sorted Array</h1>
      
      <p>Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
        </p>
        <IDE_HTML />  
    </div>
  )
}

const mergeSortedArray = () => {
  return(
    <div>
      <a href="/home">home</a>
      <h1>Merge Sorted Array</h1>
      
      <p>You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
        </p>
        <IDE_HTML />  
    </div>
  )
}

const binaryTree = () => {
  return(
    <div>
      <a href="/home">home</a>
      <h1>Binary Tree</h1>
      
      <p>Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
        </p>
        <IDE_HTML />  
    </div>
  )
}

const maxDepth = () => {
  return(
    <div>
      <a href="/home">home</a>
      <h1>Maximum Depth of Binary Tree</h1>
      
      <p>Given the root of a binary tree, return its maximum depth.
        </p>
        <IDE_HTML />  
    </div>
  )
}

const ProblemsList = () => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5555/problems')
      .then(response => setProblems(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <ul>
        <div className = 'problem-list'>
        <li>
        <a className = 'twosum-list' href="/problem-twosum">Two Sum</a>
        </li>
        <li>
          <a className = 'Int-To-Roman-Numeral-list' href="/problem-IntToRomanNumeral">Int To Roman Numeral</a>
        </li>
        <li>
          <a className = 'palindrome-list' href="/problem-PalindromeNumbe">Palindrome Number</a>
        </li>
        <li>
          <a className = 'median-of-two-array-list' href="/problem-MedianOfTwoSortedArrays">Median Of Two Sorted Arrays</a>
        </li>
        <li>
          <a className = 'add-two-numbers-list' href="/problem-addTwoNumbers">Add Two Numbers</a>
        </li>
        <li>
          <a className = 'Longest-substring-lsit' href="/problem-LongestSubstringWithoutRepeatingCharacters">Longest Substring Without repeating Chararcter</a>
        </li>
        <li>
          <a className = 'duplicates-from-sorted-array' href="/problem-RemoveDuplicatesFromSortedArray">Remove Duplicates from Sorted Array</a>
        </li>
        <li>
          <a className = 'remove-Element-list' href="/problem-removeElement">Remove Element</a>
        </li>
        <li>
          <a className = 'search-position-list' href="/problem-searchPosistion">Search Position</a>
        </li>
        <li>
          <a className = 'last-word-length' href="/problem-lastWordLength">Length of Last Word</a>
        </li>
        <li>
          <a className = 'climbing-stairs-list' href="/problem-climbingStairs">Climbing Stairs</a>
        </li>
        <li>
          <a className = 'duplicates-from-list' href="/problem-removeDuplicates">Remove Duplicates from Sorted List</a>
        </li>
        <li>
          <a className = 'merge-sorted-array-list' href="/problem-mergeSortedArray">Merge Sorted Array</a>
        </li>
        <li>
          <a className = 'binary-tree-list' href="/problem-binaryTree">Binary Tree Inorder Traversal</a>
        </li>
        <li>
          <a className = 'maximal-legth-list' href="/problem-maxDepth">Max Length</a>
        </li>
        </div>
      </ul>
    </div>
  );
};

export default ProblemsList;
export {twoSum}
export {IntToRomanNumeral}
export {PalindromeNumber}
export {MedianOfTwoSortedArrays}
export {addTwoNumbers}
export {LongestSubstringWithoutRepeatingCharacters}
export {RemoveDuplicatesFromSortedArray}
export {MergeTwoSortedLists}
export {removeElement}
export {searchPosistion}
export {lastWordLength}
export {climbingStairs}
export {removeDuplicates}
export {mergeSortedArray}
export {binaryTree}
export {maxDepth}

