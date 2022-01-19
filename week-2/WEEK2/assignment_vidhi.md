1 --- ![image info](Assignment(1).jpg)
      When I opened the "week-2/assignments/assignment.xml" file in the browser, I found a error and it is as stated below.
      The error I spotted was the attriute error in <effectiveDate> tag. The tag format was <effective Date></effective Date> and the correct tag format will be <effectiveDate></effectiveDate>. Space between two words 'effective' and 'date' will not be there in a tag so I resolved that error by removing the space between two words.
2 --- CDATA stands for 'Character Data' and CDATA is used to get rid of few charaters so that characters are not treated as regular XML. In this 
      document, the CDATA block is used in order so that the text are not considered as markup and the Parser cannot parse in the XML document.
3 --- ![image info](Assignment(3).jpg)
4 --- Prolog: <?xml version="1.0" encoding="UTF-8" standalone="yes" ?> 
      Document Body: In the XML file, all the tags are called document Body
      Epilog: <?xml-stylesheet type="text/css" href="style.css"?>
5 --- ![image info](Assignment(5).jpg)
6 --- ![image info](Assignment(6).jpg)
7 --- Added file "style.css"
																	
   

    