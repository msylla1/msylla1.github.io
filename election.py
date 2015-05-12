from random import randint

wins=0
for wins in range(10000):
  regions=0
  if randint(1,100)<= 87:
    regions+=1
  if randint(1,100)<= 65:
    regions+=1
  if randint(1,100)<= 17:
    regions+=1
  if regions == 2 or regions == 3:
    wins+=1
print "the chances of winning are: %s" %(wins/float(10000))
