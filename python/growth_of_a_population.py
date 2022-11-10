# Function should return n number of entire years needed to get a population greater or equal to p.
def nb_year(p0, percent, aug, p):
    # Year count
    count = 0
    
    # Variables created
    perc = percent / 100
    growth = p0
    
    # Add 1 to year count until p0 equals or is greater than p
    while growth < p:
        # Equation for population growth
        growth = growth + int(growth * perc) + aug
        count += 1
    
    # Return count
    return count


# Best Practice
def nb_year(p0, percent, aug, p, years = 0):
    if p0 < p:
        return nb_year(p0 + int(p0 * percent / 100) + aug, percent, aug, p, years + 1)
    return years
