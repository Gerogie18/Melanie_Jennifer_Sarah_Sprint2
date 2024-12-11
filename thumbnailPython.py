import os
from PIL import Image

def generate_thumbnails(directory_path, thumbnail_size, output_directory):
    """
    Generate thumbnails for all images in a directory.

    Args:
        directory_path (str): Path to the directory containing full-size images.
        thumbnail_size (tuple): Desired size of the thumbnails (width, height).
        output_directory (str): Path to save the thumbnails.
    """
    if not os.path.exists(output_directory):
        os.makedirs(output_directory)

    for filename in os.listdir(directory_path):
        if filename.endswith((".jpg", ".jpeg", ".png")):
            image_path = os.path.join(directory_path, filename)
            try:
                with Image.open(image_path) as image:
                    image.thumbnail(thumbnail_size)
                    output_path = os.path.join(output_directory, filename+"_thumbnail.jpg")
                    image.save(output_path)
                    print(f"Thumbnail saved to {output_path}")
            except Exception as e:
                print(f"Error processing {filename}: {e}")

# Example usage
if __name__ == "__main__":
    import os

    # Print the current working directory
    print(f"Current working directory: {os.getcwd()}")

    # Use relative paths based on the current working directory
    base_directory = os.getcwd()
    directory_path = os.path.join(base_directory, "Junksofwood/public/assets/productimages/ornaments")
    thumbnail_size = (600, 300)  # width, height
    output_directory = os.path.join(base_directory, "Junksofwood/public/assets/productimages/ornaments/thumbnails")
    
    # Print the absolute paths for verification
    print(f"Directory path: {directory_path}")
    print(f"Output directory: {output_directory}")

    # Check if the directory exists
    if not os.path.exists(directory_path):
        print(f"Error: Directory '{directory_path}' does not exist.")
    else:
        generate_thumbnails(directory_path, thumbnail_size, output_directory)