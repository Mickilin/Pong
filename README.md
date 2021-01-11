# Convex Polygon

Solució del 2 problema de LP, consta de una clase polygons.py que ens dona les funcions per crear i modificar poligons y un bot.py que ens permet interactuar amb aquesta funcio a traves de telegram


## Instalació

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
poly1 = Polygon([(100,100),(200,100),(200,200),(100,200)]) # Cuadrat de 100*100 de color negre

poly2 = Polygon([(300,100),(400,100),(400,200),(300,200)]) # Cuadrat de 100*100 de color vermell
```

La clase Polygon tambe admet el poligon buit(sense punts), punts(un punt) i linies(2 punts). 
A l'hora de crear un poligon la funcio constructora comprova que aquest sigui convex comprovant que el producte escalar a cada punt tingui el mateix signe, i que no sigui complex.

La clase Polygon ens dona les seguents funcions

### getPunts
Retorna el llistat de punts del poligon
```
poly1.getPunts()
```

### getColor
Retorna el color en format RGB del poligon
```
poly1.getColor()
```

### Perimeter
Retorna el perimetre del poligon calculant el vector entre tots els punts
```
poly1.Perimeter()
```

### Area
Retorna la area del poligon amb la formula de la meitat del sumatori dels productes vectorials de cada punt
```
poly1.Area()
```

### Vertex
Retorna el numero de vertex del poligon
```
poly1.calVertex()
```

### Edges
Retorna el numero de arestes del poligon
```
poly1.calEdges()
```

### Regular
Retorna True si tots els costats tenen la mateixa longitud o Fals en cas contrari
```
poly1.Regular()
```

### Inside
Retorna si True si el poligon pasat com a parametre(poly2) esta dintre del poligon(poly1). Si volem comprovar si un punt esta dintre o fora de un poligon podem crear un poligon de un sol punt directament en el parametre
```
poly1.Inside(poly2) #poly2 dintre de poly1?

poly1.Inside(Polygon([(50,50)])) #Punt(50,50) dintre de poly1?
```
### Centroid
Calcula el centroide del poligon amb la formula:

![Alt text](./07.8-formula5.png)
```
poly1.Centroid()
```

### Intersection
Calcula la interseccio de poly1 amb poly2. La interseccio es calcula amb el conjunt dels punts de poly2 dintre de poly1, el punts de poly1 dintre de poly2 i els punts on es creuen els dos poligons, per acabar organitzarem aquest punts per a que compleixin les condicions de ser convexos i no complexos
```
poly1.Intersection(poly2)
```

### Unio
Calcula la unio de poly1 amb poly2. La unio es calcula a partir de eliminar els punts de poly2 dintre de poly1 i eliminant els punts de poly1 dintre de poly2. De aquesta forma eliminem les interseccions entre poly1 i poly2 que per definicio no serien convexes.
```
poly1.Unio(poly2)
```

### Draw
Crea una imatge "img.png" de 400x400 on pintarem tots els poligons que li pasem com a parametre a la funcio
```
Polygon([]).DrawNorm([poly1,poly2])

```

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

