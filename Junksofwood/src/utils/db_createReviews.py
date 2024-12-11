import json
import random

#Load the original JSON data
with open('Junksofwood/db.json', 'r') as file:
    data = json.load(file)
    
productlist = data['products']

reviews = [
    {
        "reviewId": "101",
        "comment": "Absolutely love it! The craftsmanship is top-notch and it's even more beautiful in person.",
        "rating": 5
    },
    {
        "reviewId": "102",
        "comment": "Decent quality for the price, but the color was a bit different from what I expected.",
        "rating": 3
    },
    {
        "reviewId": "103",
        "comment": "Exceeded my expectations! I will definitely be buying more products from this line.",
        "rating": 5
    },
    {
        "reviewId": "104",
        "comment": "Pretty good overall, but it arrived with a small scratch. Customer service was helpful, though.",
        "rating": 4
    },
    {
        "reviewId": "105",
        "comment": "This is now my favorite item in my collection. Highly recommend to anyone looking for quality!",
        "rating": 5
    },
    {
        "reviewId": "106",
        "comment": "Not what I was hoping for. It felt a bit cheap and didn't last long.",
        "rating": 2
    },
    {
        "reviewId": "107",
        "comment": "Took a little longer to arrive than I anticipated, but it was well worth the wait!",
        "rating": 4
    },
    {
        "reviewId": "108",
        "comment": "Super cute and gets lots of compliments every time I wear it out.",
        "rating": 5
    },
    {
        "reviewId": "109",
        "comment": "I bought this as a gift, and it was a huge hit. Will purchase again for the next occasion.",
        "rating": 5
    },
    {
        "reviewId": "110",
        "comment": "The size was perfect, exactly as described. Five stars for accuracy!",
        "rating": 5
    },
    {
        "reviewId": "111",
        "comment": "Sadly, it broke after just a few uses. Not sure I'd risk buying again.",
        "rating": 1
    },
    {
        "reviewId": "112",
        "comment": "It's okay, does the job but nothing to write home about. Three stars.",
        "rating": 3
    },
    {
        "reviewId": "113",
        "comment": "Impressed by the quality and the eco-friendly packaging. Great job on sustainability!",
        "rating": 5
    },
    {
        "reviewId": "114",
        "comment": "The material is sturdy and feels like it will last a long time. Also, very stylish.",
        "rating": 5
    },
    {
        "reviewId": "115",
        "comment": "I had higher expectations based on the reviews. It's fine but nothing spectacular.",
        "rating": 3
    },
    {
        "reviewId": "116",
        "comment": "Incredible attention to detail and excellent customer service. I'm very satisfied.",
        "rating": 5
    },
    {
        "reviewId": "117",
        "comment": "Colors are vibrant, and the design is unique. Stands out beautifully!",
        "rating": 5
    },
    {
        "reviewId": "118",
        "comment": "A bit pricey for what it is. I think you can find similar items for less elsewhere.",
        "rating": 3
    },
    {
        "reviewId": "119",
        "comment": "Delivery was quick, and the product was well-packaged. No complaints here!",
        "rating": 5
    },
    {
        "reviewId": "120",
        "comment": "Perfect! Just as pictured and described. It's always a gamble ordering online, but this was a win.",
        "rating": 5
    }
]

count = 0
for i in range(100):
    count += 1
    reviewID = 120 + count
    new_review = {
        "reviewId": str(reviewID),
        "comment" : "",
        "rating" : 5
    }
    reviews.append(new_review)

count2 = 0
for i in range(80):
    count2 += 1
    reviewID = 220 + count2
    new_review = {
        "reviewId": str(reviewID),
        "comment" : "",
        "rating" : 4
    }
    reviews.append(new_review)
    
    
count3 = 0
for i in range(30):
    count3 += 1
    reviewID = 300 + count3
    new_review = {
        "reviewId": str(reviewID),
        "comment" : "",
        "rating" : 3
    }
    reviews.append(new_review)
    
print(len(reviews))

def assign_reviews_to_products(productlist, reviews):
    for product in productlist:
        num_reviews = random.randint(3, 10)  # Random number of reviews between 3 and 10
        selected_reviews = random.sample(reviews, num_reviews)  # Randomly select reviews
        product['reviews'] = selected_reviews

assign_reviews_to_products(productlist, reviews)


# Update the data dictionary with the new products array
data['products'] = productlist

# Save the modified JSON back to the file
with open('Junksofwood/data.json', 'w') as file:
    json.dump(data, file, indent=4)

print("JSON file has been updated!")
