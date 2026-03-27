import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'luxora_cars_project.settings')
django.setup()

from accounts.models import User
from vehicles.models import Vehicle

# Create Admin
if not User.objects.filter(username='admin').exists():
    User.objects.create_superuser('admin', 'denistchil@gmail.com', 'admin123')

# Initial Vehicles Data (from JS VEH object)
VEH_DATA = [
  {'id':1,'br':'ferrari','brn':'Ferrari','mo':'488 Spider','yr':2022,'pr':245000000,'km':12400,'fu':'Essence','tr':'Automatique','bo':'Cabriolet','hp':660,'cl':'Rouge Rosso Corsa','co':'Certifié','st':'available','ft':True,'nw':True,'ds':'Exceptionnel cabriolet Ferrari V8 biturbo. Historique complet, révision effectuée.'},
  {'id':2,'br':'lamborghini','brn':'Lamborghini','mo':'Huracán EVO','yr':2023,'pr':320000000,'km':4800,'fu':'Essence','tr':'Automatique','bo':'Coupé','hp':640,'cl':'Giallo Belenus','co':'Neuf','st':'available','ft':True,'nw':True,'ds':'Lamborghini Huracán EVO en livrée exclusive Giallo Belenus. Premier propriétaire.'},
  {'id':3,'br':'porsche','brn':'Porsche','mo':'911 Turbo S','yr':2023,'pr':180000000,'km':8200,'fu':'Essence','tr':'Automatique','bo':'Coupé','hp':650,'cl':'Gris Chalk','co':'Certifié','st':'available','ft':True,'nw':False,'ds':'Porsche 911 Turbo S dernière génération. Sport Chrono, Burmester, sièges adaptatifs.'},
  {'id':4,'br':'mercedes','brn':'Mercedes','mo':'AMG GT 63 S','yr':2022,'pr':145000000,'km':18500,'fu':'Essence','tr':'Automatique','bo':'Berline','hp':630,'cl':'Noir Obsidienne','co':'Certifié','st':'reserved','ft':False,'nw':False,'ds':'Mercedes AMG GT 63 S 4 portes. Pack Night, toit panoramique, Burmester.'},
  {'id':5,'br':'bmw','brn':'BMW','mo':'M8 Competition','yr':2023,'pr':120000000,'km':5600,'fu':'Essence','tr':'Automatique','bo':'Coupé','hp':625,'cl':'Bleu San Marino','co':'Neuf','st':'available','ft':False,'nw':True,'ds':'BMW M8 Competition Coupé 4.4L V8 625ch. Peinture individuelle, sièges M carbone.'},
  {'id':6,'br':'bentley','brn':'Bentley','mo':'Continental GT','yr':2022,'pr':280000000,'km':9800,'fu':'Essence','tr':'Automatique','bo':'Coupé','hp':659,'cl':'Anthracite Satin','co':'Certifié','st':'available','ft':True,'nw':False,'ds':'Bentley Continental GT W12. Boiseries Koa, sièges ventilés massants, toit panoramique.'},
  {'id':7,'br':'rollsroyce','brn':'Rolls-Royce','mo':'Ghost','yr':2021,'pr':520000000,'km':15200,'fu':'Essence','tr':'Automatique','bo':'Berline','hp':563,'cl':'Arctic White','co':'Certifié','st':'available','ft':False,'nw':False,'ds':'Rolls-Royce Ghost 6.75L V12. Commission spéciale Arctic White. Starlight Headliner.'},
  {'id':8,'br':'astonmartin','brn':'Aston Martin','mo':'DB11 V12','yr':2022,'pr':195000000,'km':11400,'fu':'Essence','tr':'Automatique','bo':'Coupé','hp':630,'cl':'Zaffre Blue','co':'Certifié','st':'available','ft':False,'nw':False,'ds':'Aston Martin DB11 V12 AMR. Peinture Zaffre Blue spéciale commande.'},
  {'id':9,'br':'porsche','brn':'Porsche','mo':'Cayenne Turbo GT','yr':2023,'pr':165000000,'km':3200,'fu':'Essence','tr':'Automatique','bo':'SUV','hp':640,'cl':'Crayon','co':'Neuf','st':'available','ft':False,'nw':True,'ds':'Porsche Cayenne Turbo GT. Version la plus performante du Cayenne.'},
  {'id':10,'br':'mclaren','brn':'McLaren','mo':'720S Spider','yr':2022,'pr':295000000,'km':7600,'fu':'Essence','tr':'Automatique','bo':'Cabriolet','hp':720,'cl':'Papaya Spark','co':'Certifié','st':'available','ft':True,'nw':False,'ds':'McLaren 720S Spider en Papaya. Toit rétractable en 11s. Pack Track.'},
  {'id':11,'br':'ferrari','brn':'Ferrari','mo':'Roma','yr':2023,'pr':210000000,'km':2100,'fu':'Essence','tr':'Automatique','bo':'Berline','hp':620,'cl':'Bianco Cervino','co':'Neuf','st':'available','ft':False,'nw':True,'ds':'Ferrari Roma — élégance absolue. Bianco Cervino, intérieur Blu Tour.'},
  {'id':12,'br':'mercedes','brn':'Mercedes','mo':'G63 AMG','yr':2023,'pr':175000000,'km':6800,'fu':'Essence','tr':'Automatique','bo':'SUV','hp':577,'cl':'Noir Magno','co':'Neuf','st':'available','ft':False,'nw':True,'ds':'Mercedes-AMG G63 Night Package. Finition Noir Magno mat, roues AMG 22".'},
  {'id':13,'br':'bugatti','brn':'Bugatti','mo':'Chiron Sport','yr':2022,'pr':1200000000,'km':800,'fu':'Essence','tr':'Automatique','bo':'Supercar','hp':1500,'cl':'Bleu Royal','co':'Neuf','st':'available','ft':False,'nw':True,'ds':'Bugatti Chiron Sport 8.0L W16 1500ch. La quintessence de l\'hypercar.'},
  {'id':14,'br':'maserati','brn':'Maserati','mo':'MC20','yr':2022,'pr':215000000,'km':6200,'fu':'Essence','tr':'Automatique','bo':'Supercar','hp':630,'cl':'Bianco Audace','co':'Certifié','st':'available','ft':False,'nw':False,'ds':'Maserati MC20 V6 Nettuno 630ch. Renaissance du bolide transalpin.'},
  {'id':15,'br':'lexus','brn':'Lexus','mo':'LC 500','yr':2023,'pr':95000000,'km':4500,'fu':'Essence','tr':'Automatique','bo':'Coupé','hp':470,'cl':'Structural Blue','co':'Neuf','st':'available','ft':False,'nw':True,'ds':'Lexus LC 500 V8 édition spéciale Structural Blue. Intérieur semi-aniline.'},
  {'id':16,'br':'lamborghini','brn':'Lamborghini','mo':'Urus Performante','yr':2023,'pr':285000000,'km':2800,'fu':'Essence','tr':'Automatique','bo':'SUV','hp':666,'cl':'Verde Gea','co':'Neuf','st':'available','ft':False,'nw':True,'ds':'Lamborghini Urus Performante 666ch. Verde Gea exclusif.'}
]

admin_user = User.objects.get(username='admin')

for v in VEH_DATA:
    if not Vehicle.objects.filter(brand=v['brn'], model=v['mo']).exists():
        Vehicle.objects.create(
            brand=v['brn'],
            model=v['mo'],
            year=v['yr'],
            price=v['pr'],
            mileage=v['km'],
            fuel_type=v['fu'],
            transmission=v['tr'],
            color_ext=v['cl'],
            power_hp=v['hp'],
            condition=v['co'],
            status=v['st'],
            featured=v['ft'],
            new=v['nw'],
            description=v['ds'],
            seller=admin_user
        )

print("Data seeded successfully!")
