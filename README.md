# Convex Polygon

Solució del 2 problema de LP, consta de una clase polygons.py que ens dona les funcions per crear i modificar poligons y un bot.py que ens permet interactuar amb aquesta funcio a traves de telegram


### Instalació

Primer haurem d'instalar Python3 amb la comanda

```
$ sudo apt-get update
$ sudo apt-get install python3.8 python3-pip
```
I les llibreries Pillow per crear imatges i python-telegram-bot per interactuar amb Telegram

```
$ sudo pip install --upgrade Pillow
$ pip install python-telegram-bot --upgrade
```

## Clase Poligon

La clase Poligon consta de una llista de tuples (cada tupla representa un punt amb les coordenades (x,y)) y una tupla de longitud 3 per representar el color en formant RGB. El parametre del color es opcional y en cas de que no es pasi el valor per defecte es el color negre 

```
Polygon([(100,100),(200,100),(200,200),(100,200)]) # Cuadrat de 100*100 de color negre

Polygon([(300,100),(400,100),(400,200),(300,200)]) # Cuadrat de 100*100 de color vermell

## Bot Telegram

Primer de tot per interactuar amb Python necessitem un acces token que identifica el nostre bot

```
1 - Visiteu el @BotFather.

2 -Useu la comanda /newbot i doneu la informació que us demana (nom complet i nom d’usari del bot, que ha d’acabar amb bot).

3 -Deseu en un fitxer token.txt el vostre access token, que té un aspecte com ara U10201543:AAHdqTcvCH1vGWJxfSeofSAs0K5PALDsaw.
```
Amb el token ja podem executar el bot i utilitzar les seguents funcions:

### Nou
Crea un nou poligon. 
Tots els parametres estan separats per espais.
El primer parametre sempre es el nom 
Les coordenades (X,Y) s'escriuen sense espai ((x,y) - correcte, (x, y) - incorrecte)
Si es vol definir el color amb que es pintara ha de ser l'ultim parametre en format (r,g,b) seguint les mismes normes que un punt
```
/nou nom (x1,y1) (x2,y2) ... (xn,yn) (r,g,b)* : 
```
### Info
 Retorna els punts que defineixen el poligon y el color del poligon
 ```
/info nom:
```

### Area
Calcula l'area del poligon
```
/area nom : Calcula l'area del poligon
```

### Perimetre
Calcula el perimetre del poligon
```
/perimetre nom 
```

### Arestes
Calcula el nombre d'arestes del poligon
```
/arestes nom 
```

### Vertex
Calcula el nombre de vertes del poligon
```
/vertex nom 
```

### Dintre punt
Calcula si el punt (x,y) esta dintre del poligon amb el nom "nom"
```
/dintre nom (x,y) 
```

### Dintre poly
Calcula si el poligon "nom2" esta dintre de "nom1"
```
/dintre_poly nom1 nom2 
```

### Centroid
Calcula el centroide del poligon "nom"
```
/centroid nom 
```

 ### Unio
 Calcula els punts del poligon definit per la unio dels poligons "nom1" i "nom2"
 ```
-/unio nom1 nom2  
```

### Interseccio
Calcula els punts del poligon definit per la intersecio dels poligons "nom1" i "nom2"
```
/interseccio nom1 nom2 
```

### Box
Calcula la bounding box del poligon "nom"
```
/box nom 
```

### Dibuix
Dibuixa els poligons en els parametres en una imatge 400x400.
Els poligons es dibuixen en el mateix ordre que els hem pasat, primer es dibuixa nom1 ,despres a sobre nom2
```
/dibux nom1 nom2 ... nom_n 
```

