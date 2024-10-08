import cv2
from matplotlib import pyplot as plt
import easyocr

# Cargar la imagen proporcionada

img = cv2.imread('Placa4.jpg')
img = cv2.resize(img, (800, 600))  # Ajustar el tamaño para mejor procesamiento

# Convertir la imagen a escala de grises
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# Aplicar un filtro para reducir el ruido
filtered = cv2.bilateralFilter(gray, 11, 17, 17)

# Aplicar un umbral para mejorar el contraste del texto
_, threshold_img = cv2.threshold(filtered, 115, 240, cv2.THRESH_BINARY)

# Mostrar la imagen preprocesada
plt.imshow(cv2.cvtColor(threshold_img, cv2.COLOR_BGR2RGB))
plt.title("Imagen preprocesada para OCR")
plt.show()

# Utilizar EasyOCR para leer el texto en la imagen preprocesada
reader = easyocr.Reader(['en'])
results = reader.readtext(threshold_img)

# Verificar si se encontró algún texto y mostrarlo en la imagen
if results:
    for (bbox, text, prob) in results:
        # Dibujar el texto detectado en la imagen
        (top_left, top_right, bottom_right, bottom_left) = bbox
        top_left = tuple([int(val) for val in top_left])
        bottom_right = tuple([int(val) for val in bottom_right])
        img = cv2.rectangle(img, top_left, bottom_right, (0, 255, 0), 2)
        img = cv2.putText(img, text, (top_left[0], top_left[1] - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (0, 255, 0), 2, cv2.LINE_AA)

    # Mostrar la imagen con el texto detectado
    plt.imshow(cv2.cvtColor(img, cv2.COLOR_BGR2RGB))
    plt.title("Texto detectado en la imagen")
    plt.show()

    # Imprimir los resultados detectados
    print("Texto detectado:")
    for result in results:
        print(f"Texto: {result[1]} - Confianza: {result[2]:.2f}")
else:
    print("No se detectó ningún texto en la imagen.")
