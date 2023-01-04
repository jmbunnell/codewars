# my solution
def remove_url_anchor(url):
    split = list(url)
    new = []
    last = ''
    for i in split:
        if i != '#':
            new.append(i)
            continue
        if i == '#':
            break    
    return last.join(new)