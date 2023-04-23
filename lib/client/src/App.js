import './App.css';
import LoginSignUp from './components/pages/signup';
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from './components/pages/home';
import NavBar from './components/pages/navBar';
import { LandingPage } from './components/pages/LandingPage';
import { IDE } from './components/pages/IDE.js';
import IDE_HTML from './components/pages/IDEHTML';
import { UserProfile } from './components/pages/UserProfile';
import { twoSum } from "./components/pages/problemList";
import { IntToRomanNumeral } from "./components/pages/problemList";
import { PalindromeNumber } from "./components/pages/problemList";
import { MedianOfTwoSortedArrays } from "./components/pages/problemList";
import { addTwoNumbers } from "./components/pages/problemList";
import { LongestSubstringWithoutRepeatingCharacters } from "./components/pages/problemList";
import { RemoveDuplicatesFromSortedArray } from "./components/pages/problemList";
import { MergeTwoSortedLists } from "./components/pages/problemList";
import { removeElement } from "./components/pages/problemList";
import { searchPosistion } from "./components/pages/problemList";
import { lastWordLength } from "./components/pages/problemList";
import { climbingStairs } from "./components/pages/problemList";
import { removeDuplicates } from "./components/pages/problemList";
import { mergeSortedArray } from "./components/pages/problemList";
import { binaryTree } from "./components/pages/problemList";
import { maxDepth } from "./components/pages/problemList";

function App() {
  

  return (
    <div>
      
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/home">
          <HomePage />
        </Route>
        <Route exact path="/LoginOrsignup">
          <LoginSignUp />
        </Route>
        <Route exact path="/IDE">
          <IDE_HTML />
        </Route>
        <Route exact path="/problem-twosum">
          <twosum />
        </Route>
        <Route exact path="/problem-IntToRomanNumeral">
          <IntToRomanNumeral />
        </Route>
        <Route exact path="/problem-PalindromeNumber">
          <PalindromeNumber />
        </Route>
        <Route exact path="/problem-MedianOfTwoSortedArrays">
          <MedianOfTwoSortedArrays />
        </Route>
        <Route exact path="/problem-addTwoNumbers">
          <addTwoNumbers />
        </Route>
        <Route exact path="/problem-LongestSubstringWithoutRepeatingCharacters">
          <LongestSubstringWithoutRepeatingCharacters />
        </Route>
        <Route exact path="/problem-RemoveDuplicatesFromSortedArray">
          <RemoveDuplicatesFromSortedArray />
        </Route>
        <Route exact path="/problem-MergeTwoSortedLists">
          <MergeTwoSortedLists />
        </Route>
        <Route exact path="/problem-removeElement">
          <removeElement />
        </Route>
        <Route exact path="/problem-searchPosistion">
          <searchPosistion />
        </Route>
        <Route exact path="/problem-lastWordLength">
          <lastWordLength />
        </Route>
        <Route exact path="/problem-climbingStairs">
          <climbingStairs />
        </Route>
        <Route exact path="/problem-removeDuplicates">
          <removeDuplicates />
        </Route>
        <Route exact path="/problem-mergeSortedArray">
          <mergeSortedArray />
        </Route>
        <Route exact path="/problem-binaryTree">
          <binaryTree />
        </Route>
        <Route exact path="/problem-maxDepth">
          <maxDepth />
        </Route>
        <Route exact path="/your-solutions">
          <UserProfile/>
        </Route>
      </Switch>
    </div>
  );
}

export default App; 