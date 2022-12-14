# Returns price paid based on hotdogs purchased
def sale_hotdogs(n):	
    if n < 5:
        return n * 100
    if n >= 5 and n < 10:
        return n * 95
    else: 
        return n * 90

# Best Practice
def sale_hotdogs(n):
    return n * (100 if n < 5 else 95 if n < 10 else 90)
