def narcissistic( value ):
    number = str(value)
    value_length = len(number)
    num = 0
    print(value_length)
    print(number)

    for i in number:
        result = pow(int(i), int(value_length))
        num += result
    print(num)
    if num == value:
        return True
    else:
        return False
        
narcissistic(153)