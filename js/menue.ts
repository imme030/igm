#http://typo3blogger.de/if-abfrage-mit-typoscript/
#http://www.typo3wizard.com/de/snippets/menus/zweifarbiges-menue-letzer-menuepunkt-abhaengig-vom-vorletzten.html
#http://www.typo3wizard.com/de/snippets/menus/menue-dynamisch-in-2-teile-aufteilen.html
#http://blog.matthaa.de/typo3-menuesitemap-element-mit-bildern/
#http://www.typo3.tum.de/index.php?id=216
#http://www.typo3.net/forum/thematik/zeige/thema/100812/?show=1
#http://www.typo3.net/forum/thematik/zeige/thema/115965/

#http://www.typo-script.de/typoscript/if-else-abfragen-mit-typoscript-umsetzen

#http://www.typo3.tum.de/index.php?id=216

#http://www.typo-script.de/typoscript/verschachteltes-tmenu-auf-zwei-ebenen

#http://www.typo3.net/forum/thematik/zeige/thema/106036/

#https://github.com/EvaGo/igm


   


  
lib.navxx = COA
lib.navxx {
   
  10 = HMENU
	10.special = list
	10.special.value = 3,4,5,6
  10.1 = TMENU
  10.1 {
	expAll = 1
    wrap = <div>1.teil<br>|</div>
    NO {
	
		wrap = <li>|</li>
		

    }
  }

  
  10.2 < .10.1
  10.2{
	wrap = <div>subnav<br>|</div>
	 NO {
      stdWrap.cObject = COA
      stdWrap.cObject {
        10 = TEXT
        10.field = title
        if.value.data = register:count_HMENU_MENUOBJ
        if.negate = 1
        if.isLessThan.prioriCalc=1
        if.isLessThan.cObject=TEXT
        if.isLessThan.cObject.insertData=1
        if.isLessThan.cObject.value = ({register:count_menuItems}+1)/2
        wrap = |<br>
      }
	 } 

  }
  20.2 < .10.1
  20.2.wrap = <div>2.teil<br>|</div>
  20.2.NO.stdWrap.cObject.if.negate >    

}

		
		

lib.navyy = COA
lib.navyy {
   
  10 = HMENU
	10.special = directory
	10.special.value = 1
  10.1 = TMENU
  10.1 {
    wrap = <div>1.teil<br>|</div>
    NO {
      stdWrap.cObject = COA
      stdWrap.cObject {
        10 = TEXT
        10.field = title
        if.value.data = register:count_HMENU_MENUOBJ
        if.negate = 1
        if.isLessThan.prioriCalc=1
        if.isLessThan.cObject=TEXT
        if.isLessThan.cObject.insertData=1
        if.isLessThan.cObject.value = ({register:count_menuItems}+1)/2
        wrap = |<br>
      }
    }
  }
  20 < .10
  20.1.wrap = <div>2.teil<br>|</div>
  20.1.NO.stdWrap.cObject.if.negate >
}


lib.navxx = COA
lib.navxx {
	 10 = HMENU
  10 {
    special = directory
    special.value = 3
    1 = TMENU
    1 {
      wrap = <div>1 Menue<ul>|</ul></div>
      NO {
        doNotLinkIt = 1
        stdWrap.cObject = TEXT
        stdWrap.cObject {
          typolink {
            parameter.field = uid
            wrap = <li> | </li>
            ATagBeforeWrap = 0
          }
        if.negate = 1
        if.isTrue = |*|0||1|*|
      }
      }
    }
  }
  20 < .10
  20.1.wrap = <div>2 Menue<ul>|</ul></div>
  20.1.NO.stdWrap.cObject.if.negate >
}


  

lib.nav = COA
lib.nav {
     10 = HMENU
	 10 {
    special = directory
    special.value = 1
        1 = TMENU
		1 {
		
			wrap = <ul class="nav navbar-nav">|</ul>
			expAll = 1
			NO{
				allWrap = <li>|</li>     
				ATagTitle.field = abstract // description // title  
				ATagBeforeWrap = 1  	
			}	
			CUR = 1
			CUR {
				allWrap = <li>|</li>     
				ATagTitle.field = abstract // description // title  
				ATagBeforeWrap = 1     
			}	
			IFSUB = 1
			IFSUB.wrapItemAndSub (
						<li class="dropdown">|</div>
						</div>
						</ul>
					</li> 
				)
					
			IFSUB {
			
				doNotLinkIt = 1

				ATagBeforeWrap = 1    
				stdWrap.cObject = COA
				stdWrap.cObject {
				
				
					10 = TEXT
					10.field = title
					10.typolink {
						parameter.data = page:uid
						additionalParams.insertData = 1
						ATagParams =  class="dropdown-toggle" data-toggle="dropdown"
					}	
					
					
					20 = TEXT
					20.value (	
									<ul class="dropdown-menu" role="menu">
										  <div class="container">
											<div class="row">
											  <div class="description">
												<li>					
					)
					30 = TEXT
					30.field = title
					30.innerWrap = <h2>|</h2>
					30.if.isTrue.field = abstract
					
					40 = TEXT
					40.field = abstract
					40.innerWrap = <p>|</p>
					40.if.isTrue.field = abstract
					
					50 = TEXT
					50.value (
						</li>
						</div>
					
					)
				}


				after.cObject = COA
				after.cObject {

				10 = HMENU			
				10 {
				  special = directory
				  special.value.field = uid
				  maxItems = TEXT
				  maxItems.numRows.table = pages
				  maxItems.numRows.select.pidInList.field = uid
				  maxItems.stdWrap.wrap = | / 2 + 1
				  # Oder:
				  # maxItems.stdWrap.wrap = | / 2 + 1
				  maxItems.prioriCalc = intval
				  1 = TMENU
				  1 {
					expAll = 1
					noBlur = 1
					NO {
					  allWrap = <li>LEFT::|</li>
					}
				  }

				   2 < .1
				   2.maxItems.stdWrap.wrap = |	
					2 = TMENU
					2 {
						expAll = 1
						noBlur = 1
						NO {
						  allWrap = <li>3. ebene::|</li>
						}
					}					
				   
				   

				}
				10.wrap = <div class="partList">DIV:|</div>

				20 = HMENU			
				20 {
				  special = directory
				  special.value.field = uid
				  begin = TEXT
				  begin.numRows.table = pages
				  begin.numRows.select.pidInList.field = uid
				  begin.stdWrap.wrap = | / 2 + 2
				  # Oder:
				  # begin.stdWrap.wrap = | / 2 + 2
				  begin.prioriCalc = intval
				  1 = TMENU
				  1 {
					expAll = 1
					noBlur = 1
					NO {
					  allWrap = <li>RIGHT::|</li>
					}
				  }
				   2 < .1
				   2.maxItems.stdWrap.wrap = |	
					2 = TMENU
					2 {
						expAll = 1
						noBlur = 1
						NO {
						  allWrap = <li>3. ebene::|</li>
						}
					}
			  
				}
				20.wrap = <div class="partList">DIV:|</div>
			}				
		}
	}
	
}	


			
		
} 