class Solution:
    def isPalindrome(self, x: int) -> bool:
        

        reversed_num = 0
        num = x
        while num > 0:
            remainder = num % 10
            reversed_num = reversed_num * 10 + remainder
            num = num // 10
        print(reversed_num)
        if reversed_num == x:
           return True
        elif reversed_num != x:
            return False
        print(x)
        
