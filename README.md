# Komponentlista för Task 2 - Feature Flicks
Mitt val föll på att bryta ut i en komponent där jag kände att det började bli lite för mycket HTML och funktionalitet, samt där jag kände att det underlätta att läsa koden. Jag upplever att det blir svårare att bryta ut i komponenter desto mer avancerad en sida blir, och att ytterligare träning krävs för att utnyttja möjligheterna att bryta ut till komponenter fullt ut.

## MovieCards
Komponenten moviecards används för att visa filmerna på startsidan i "kortformat".
Den tar emot movies och screenings som en prop för att kunna visa både deras sändingstider och information avseende filmens kategori.

## MovieRows
Används på bokningssidan. Bokningssidan genererar en table-body och MovieRows komponenten tar ett antal props, för att kunna skapa upp raderna för tabellen.
Raderna som den genererar är klickbara och för dig vidare till biljettbokningssidan.,

## Navigationbar
Skapar upp nav-baren som är synlig genomgående på sidan. För att göra den synlig överallt så läggs den till redan i main.

## TicketInfo
Den här komponenten visar simpel information om filmen på sidan där man väljer biljett.

## SelectTicketTypes 
Genererar drowndown-listan för varje biljettyp. Den här komponenten tar emot en funktion som en prop så att den kan använda de hooks som är uppsatta på selecttickets sidan.

## TicketDetails
Generar informationen för det totala priset av biljetterna samt knappen för att ta sig till SelectSeats.
