

# # Multiplication Table
# num = int(input("Enter a number: ")) # Input from user
# for i in range(1, 11):
#     result = num * i # Multiplication
#     print(f"{num} x {i} = {result}") # Displaying the result 


# # Sum of Even Numbers from 1 to 100
# total = 0
# for i in range(1,101):
#     if i % 2 == 0: # Check if the number is even
#         total += i # Add to total
# print(total)

# # Area of a Triangle
# base = int(input("Enter the base of the triangle: ")) # triangle base Input from user 
# height = int(input("Enter the height of the triangle: ")) # triangle height Input from user 

# def triangle_area(base, height): # Function to calculate area of triangle
#     area = 1/2 * base * height # Calculate area
#     return area # Return area

# area = triangle_area(base, height) # Call the function  
# print(f"The area of the triangle is: {area}") # Displaying the area


# # Grade Calculation
# marks = int(input("Enter your marks: ")) # Input marks from user
# def calculate_grade(marks): # Function to calculate grade
#     if marks<0 or marks>100: # Check for valid marks
#         return "Invalid Marks"
#     elif marks >= 80: # Check for grade A+  
#         return "A+"
#     elif marks >= 70: # Check for grade A
#         return "A"
#     elif marks >= 60: # Check for grade A-
#         return "A-"
#     elif marks >= 50: # Check for grade B
#         return "B"
#     elif marks >= 40: # Check for grade C
#         return "C"
#     else:
#         return "F"
# grade = calculate_grade(marks) # Call the function
# print(f"Your grade is: {grade}") # Displaying the grade

# Program for Printing Odd Numbers from 1 to 50
i = 1
while i <= 50:
    if i % 2 != 0:
        print(i)
    i += 1

# Simple Command Loop
command = ""
while command.lower() != "stop":
    command = input("Enter a command (type 'stop' to quit): ")
    print(f"You entered: {command}")