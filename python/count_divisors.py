# My solution
def divisors(n):
   # Count 
    count = 1
    
    # Loop through numbers equal and below n
    for i in range(1, n):
        
        # Count 1 for each with no remainder
        if n % i == 0:
            count += 1
            
    return count


#Best Practice
def divisors(n):
    return  len([l_div for l_div in range(1, n + 1) if n % l_div == 0]);
