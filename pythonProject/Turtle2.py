from turtle import *
import colorsys

bgcolor("black")
speed(0)
pensize(2)
h = 0  # color hue

for i in range(200):
    c = colorsys.hsv_to_rgb(h, 1, 1)
    pencolor(c)
    h += 0.005  
    forward(i * 1.5)
    right(59)
    forward(i * 0.5)
    right(61)

hideturtle()
done()
