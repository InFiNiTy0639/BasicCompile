from turtle import *

penup()
setposition(-60, 0)
pendown()

speed(0)
bgcolor('black')
colors = ['orange', 'white']
pensize(2)

for i in range(150):
    pencolor(colors[i % 2]) 
    rt(i)
    circle(90, i)
    penup()
    fd(i + 50)
    pendown()
    rt(90)
    fd(i - 65)

hideturtle()
done()
