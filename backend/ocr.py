
from gtts import gTTS
from playsound import playsound

try:
    from PIL import Image
except ImportError:
    import Image
import pytesseract


class OCR:
    def __init__(self, filename):
        self.filename = filename

    accent = "com"
    language = "en"

    def ocr_core(self, filename):
        """
        This function will handle the core OCR processing of images.
        """
        language = "en"
        accent = "com"
        # We'll use Pillow's Image class to open the image and pytesseract to detect the string in the image
        text = pytesseract.image_to_string(
            Image.open(self.filename), lang=language)
        speech = gTTS(text=text, lang=language, tld=accent, slow=False)
        speech.save("text.mp3")

        playsound("text.mp3")
        return text
