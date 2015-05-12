from random import randint

wins=0
for i in range(10000): #determines wins in each region from 0 to 10000 elections
  regions=0
  if randint(1,100)<= 87: #this increase the reigons if the number is less than 87%
    regions+=1
  if randint(1,100)<= 65: #this increase the reigons if the number is less than 65%
    regions+=1
  if randint(1,100)<= 17: #this increase the reigons if the number is less than 17%
    regions+=1
  if regions == 2 or regions == 3:
    wins+=1 # increases the number of wins if the reigions equals 2 or 3
print "the chances of winning are: %s" %(wins/float(10000)) # this takes the number of wins and divides it by the elections in order to determine the chances of winning.
