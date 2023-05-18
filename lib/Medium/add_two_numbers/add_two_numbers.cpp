/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        // We don't know in the beginning, which list is longer
        ListNode* resultL1 = l1;
        ListNode* lastNode = l1;
        ListNode* resultL2 = l2; 
        
        bool carry = false;

        // Add all elements in case they are present in both lists
        while (l1 && l2)
        {
            // Perform only single addition in atomic time
            int tmpVal = l1->val + l2->val + carry;
            // Set carry with operator >=, that in general should work faster than if and assignment or using operator >
            carry = tmpVal >= 10;
            // In case when carry is set, perform modulo by using subtraction that is faster than modulo operator
            if (carry)
            {
                tmpVal -= 10;
            }
            // It is important to store the sum in both lists since we still don't know, which one is longer
            // Since assignments are atomic operations, this is not a major slowdown and it comes as a cost for faster algorithm
            l1->val = l2->val = tmpVal;
            // In case we have to add carry to the last element, we have to keep track of the last element before one of the lists goes into nullptr
            lastNode = l1;
            l1 = l1->next;
            l2 = l2->next;
        }

        // Now when one of the lists reached zero, we can determine which one we have to select to proceed
        ListNode* result;
        ListNode* lL;

        if (l1)
        {
            lL = l1;
            result = resultL1;
        }
        else if (l2)
        {
            lL = l2;
            result = resultL2;
        }
        else
        {
            // If both lists are the same length, all that's left to do is handle final carry flag and return the final sum
            if (carry)
            {
                lastNode->next = new ListNode(1);
            }
            return resultL1;
        }

        while(lL && carry)
        {     
            lL->val += carry;
            
        carry = lL->val >= 10;
        if (carry)
        {
            lL->val -= 10;
        }
        else
        {
            // No more carry needed, return correct result
            return result;
        }        
        lastNode = lL;
        lL = lL->next; 
        }

        // In case one last carry is needed, add it
        if (carry)
        {
            lastNode->next = new ListNode(1);
        }
        return result;
    }
};
