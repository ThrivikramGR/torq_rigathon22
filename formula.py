def formulaTDS(val):
    if val == 600:
        return 3.5
    elif (val == 300):
        return 1
    elif (val > 300 and val < 600):
        val -= 300
        varVar = 1 + (val * 0.00833)
        return varVar
    elif (val > 600 and val <900):
        val -= 600
        varVar = 3.5 - (val * 0.005833)
        return varVar
    elif (val >= 900):
        val -= 900
        varVar = 1 - (val * 0.005833 * 2)
        if(varVar < 0):
            return 0
        return varVar
    else:
        val = 300 - val
        varVar = 1 - (val * 0.005833 * 2)
        if(varVar < 0):
            return 0
        return varVar

def formulapH(val):
    if val == 7.5:
        return 3.5
    elif (val == 6.5):
        return 2
    elif (val > 6.5 and val < 7.5):
        val -= 6.5
        varVar = 2 + (val * 0.15)
        return varVar
    elif (val > 7.5 and val <8.5):
        val -= 7.5
        varVar = 3.5 - (val * 0.15)
        return varVar
    elif (val >= 8.5):
        val -= 8.5
        varVar = 2 - (val * 0.15 * 2)
        if(varVar < 0):
            return 0
        return varVar
    else:
        val = 6.5 - val
        varVar = 2 - (val * 0.15 * 2)
        if(varVar < 0):
            return 0
        return varVar

def formulaWatVap(val):
    if(val > 16 and val < 40):
        return 2
    else:
        return 1

def formulaTurb(val):
    if(val < 1):
        return 1
    elif(val < 3):
        return 0.7
    else:
        return 0.1

def OurScale(tds,ph,tub,temp):
    Scale = formulaTDS(tds)+formulapH(ph)+formulaTurb(tub)+formulaWatVap(temp)
    return Scale

print(OurScale(450,6.1,0.5,71))
print(OurScale(680,7.5,2.8,30))
print(OurScale(900,8.9,6.3,55))
print(OurScale(650,8.2,3.2,63))