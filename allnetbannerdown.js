/*
 * SEGA Amusement Linkage Live Network downtime counter
 * Written by: ENOKI https://github.com/ORileyTan
 * Licensed under the GNU General Public License v3.0
 * SPDX-License-Identifier: GPL-3.0-only
 *
 * Revision: 1.0
 *
 * Counts how many days all.net has been down until it's back up lol
 *
 * NOT AFFILIATED WITH SEGA IN ANY WAY, I MADE THIS BECAUSE IT WAS FUNNY
 * Rights to ALL.Net and related branding belongs to SEGA
 */

console.log("Initialising SEGA Amusement Linkage Live Network downtime counter");
console.log("ENOKI says greetings and have a great day!!!");

/*Asset blobs*/
const allneticong_blob = "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALHUExURQAAAOjo6O3t7e7u7uzs7Onp6aenp/Hx8dzc3La2tq+vr66urrS0tMLCwre3t7W1tcDAwOfn56qqqt/f37Ozs7KysrGxsdfX15qamuXl5bCwsKurq9TU1KysrKOjo6ioqKmpqaioqqKhn9XX1qWlpaampqSkpKWlo52dndTW1Z+fn56enqCgoJ+doImLitTV1+bm5ouLi5KSkpmZmcbGxv7+/v////r6+sfFxtPT03Z2dnNzc319fYWFhYqKio+Pj5SUlJOTk9HR0aGhoZaWlsHDwOHh49PR0uTk5HFxcW9vb25ubnBwcHJycnV1dXR0dPj4+OPj4zg4OCcnJyYmJre1tv39/Wtra2pqaisrKzExMSgoKGZmZjw8PM3Mzv/09P85Of+9vWxsbGhoaK2trevr61lZWX9/f5iYmEBAQP/19f8cHP8AAOLi4mRkZPLy8kxMTLi4uPr6+Dw9P2NjY////f7+/NDQ0PX19WJiYmFhYfPz82lpaTAwMH9/gSclKNjX1f39/9bW2OHh4V9fX2BgYIKCgkZGRiUmKCYmKDU0MtLS1ODf311dXfT09Pv7+0VFRSgnJaGjot3c2lxcXIyMjLm5ub29vdTU1vz8/O/v7+Dg4FtbW7u7uzU1NSUnJr28us7O0F5eXlpaWt7e3kpKSnh4eP/z88nLyuXm6C4uLtnZ2efm5M7Mz/f19i4qKcPBwv/29jo6OsnJy83NzWdnZ/Pz9f7//ykpK42LjNPV1NHR03V3diYmJCcmJC0tLcPDw/7//UNDQ21tbfz///Ly88jGx1RUVo6OjpGRkYCAgIGBgdLQ1f/+/3l3esjJxPDw8cvJzEJAQfn7+sXFxY2NjbS2tff5+Ors68XDxPf4+vn482xwbz49O+7u8JeXl9jY2NjY1tnX3Lq8u9fX2dTY19fV2NPUz5GPkN/g3/++vurq6gAAAMKpPgAAAADtdFJOU///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AOpBRAoAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCA1LjEuMTITAUd0AAAAuGVYSWZJSSoACAAAAAUAGgEFAAEAAABKAAAAGwEFAAEAAABSAAAAKAEDAAEAAAACAAAAMQECABEAAABaAAAAaYcEAAEAAABsAAAAAAAAAGAAAAABAAAAYAAAAAEAAABQYWludC5ORVQgNS4xLjEyAAADAACQBwAEAAAAMDIzMAGgAwABAAAAAQAAAAWgBAABAAAAlgAAAAAAAAACAAEAAgAEAAAAUjk4AAIABwAEAAAAMDEwMAAAAADZp5qVybcLXwAAAq5JREFUOE9jeAMCDNgAWOYNiGJgYGRiZmGCA2Ygj5mVDaoXiNg5OLmQATeI4OFgBqtgAMrz8vHx8/PzcUIBkMUPhJwCghDjhYR5RERFRUXEgAQYgFlAQkxcAmQ+gySPGNxcMICypKSkZcAKWKWFZIWkpWWlYQDEAwM5cbACRnk4YIPSCmBSUUkZokAFClRVVNVUQQw1MFdFXUMTrEBQCwq0dbR1IAwtLTlRES1dPX2wAgNDI2MJCIDQKiaSpmZmpmbmFpZgBZJW1lY2tnb2Dg4OjkCsYQmUdZJ3dpF3dXMHK/Dw9AIBbx9fPyt/K7kAs0CboOAQEAg1MzMLY2AI9A6HgojwcB5Tc7vIqOgQw5hY6Tiz+IREM6CCpGQ4SDFLTQtJzwjWMfPNNDfLys5JACrITc6DAaOw/IKowqLiktIy/3Kz+Oyc7KwKoIKYSgio8q42qwmpta6rb2g0awLpz443ADqyuaQFAlo5zURD7Nvagzs6u7oh+ntAvmiu6oWAkr7+CWlmZowTrSdNBuvPYgd7s7l1CgRMNZsWPN3MtLB+xkyI+bPKwQpmt8yBgLlmVvPMzUwd5wdA9M9asBCiYNFiCFhitjQCGMLLRMDyy/NXrIQoEIYpYDeLXGU9nWk1xH2pJmZr1kLcUNLS2trS2tKybub89SEhG8D6N/Zt2swmsQVigu/WrVuTY5K3btu+Y+eu3RD3sezZuy9k/wGwAjUBawjwOHjo8BGI+44eO16roqJzAqTgDYPByVOnT51uO33m7LnzEP0XLppZX7qcPxsoD844zVdOGF6dOvXa9Rtmy0H6Z928dfvO3XvNIHlI1ru/evWDBw8ePgK7P7768ZPVT589fwGWBysAOgQCzBKA8i+hHIg8RAEMmL9KyHoNZcMAioKZM00roEwoePMGAOqLh1nFrqDQAAAAAElFTkSuQmCC"
const allneticonngold_blob = "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAB0AAAAVCAMAAACNHhVQAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC6UExURWRkZERERDU1NTQ0NDc3NzY2NjMzMzIyMjAwMHh4eF9fX0JCQkNDQ0ZGRkFBQT4+PkBAQEtLSz09PT8/Pzg4OCUlJTo6OhsbGwAAADExMTs7Ozw8PBcXF9QNK56enp2dnZycnDk5OZ+fny8vLy4uLhkZGRgYGC0tLSwsLCoqKisrKykpKRMTEyIiIiEhISMjIyAgIB8fHx0dHQsLCwQEBBUVFRAQEBISEhEREQ8PDw4ODgwMDA0NDQAAAB7/bbQAAAA+dFJOU/////////////////////////////////////////////////////////////////////////////////8AuvtxNgAAAAlwSFlzAAAOwwAADsMBx2+oZAAAABh0RVh0U29mdHdhcmUAUGFpbnQuTkVUIDUuMS45bG7aPgAAAUhJREFUKFNt0G1XgjAUAGCdQymU2aCF98rGkpIyTa1ILf7/3+ryJnzonsHZ4eG+bIOiKAZDxtiIcWfscO44DnfYxKXvJLRubr3pzBfzu6EMvKHve7OpDO8blYPZfD73A98X9Exp4wVq9BDVupABoAAlBaIQQkkJwN1lHFc6YdoYnRhtEq2NUmBBhXEZlTpCa7Q6sVAiAqrK4jgqNQzQJMok8KgVIFwtqtQGYBNDpbUl7KzuS1MBkGkA7KydWQEoVMb0a66WrXJEpGTTGYRXHSuBYHt51KenVireM2oEYdrqKPA6k4R0LJ4+Nco6K7PoNhCc1XOtnSFaIvpDIXPryj2DkA5WVVbjZqrGUne9zrLsJcte00W2cTdvlUalbXfv291uv90fDvsqjh+fdd8oOn7l+ffplOf5+UKvyyU///y2N0n+XxRFUfwB4AZKXrkMFXMAAAAASUVORK5CYII="

/*Code snippet taken from keepandroidopen*/
  function getScriptParams() {
    var params = {};
    try {
      var src = document.currentScript && document.currentScript.src;
      if (!src) return params;
      var q = src.indexOf("?");
      if (q === -1) return params;
      var pairs = src.substring(q + 1).split("&");
      for (var i = 0; i < pairs.length; i++) {
        var kv = pairs[i].split("=");
        params[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1] || "");
      }
    } catch (e) {}
    return params;
  }
  var params = getScriptParams();

/*Creates background for banner itself and content*/
var bannerbg = document.createElement("div");
bannerbg.style.backgroundColor = "black";
bannerbg.style.borderStyle = "solid";
bannerbg.style.borderColor = "white";
/*Creates allnet icon*/
var allneticong = document.createElement("IMG");
allneticong.style.position = "absolute";
allneticong.style.margin = "5px";
bannerbg.appendChild(allneticong);
if (params.allneticon) {
	console.log(params.allneticon)
if (params.allneticon == "old") {
	allneticong.src = allneticonngold_blob;
}
if (params.allneticon == "new") {
		
	allneticong.src = allneticong_blob;
}
} else {
	allneticong.src = allneticong_blob;
}
// text generation
var fakeerrorrxr = document.createElement("P");
fakeerrorrxr.textContent = "ERROR 8106 ALL.Net System Caution";
fakeerrorrxr.style.color = "white";
fakeerrorrxr.style.justifyContent = "center";
fakeerrorrxr.style.display = "flex";
fakeerrorrxr.style.margin = "9px";
fakeerrorrxr.style.fontFamily = "Arial";
bannerbg.appendChild(fakeerrorrxr);
var maintxt = document.createElement("P");
maintxt.textContent = "Days since ALL.Net went down because SEGA thought geoblocking would solve their PHP problems:";
maintxt.style.color = "white";
maintxt.style.justifyContent = "center";
maintxt.style.display = "flex";
maintxt.style.margin = "9px";
maintxt.style.fontFamily = "Arial";
bannerbg.appendChild(maintxt);
var timertext = document.createElement("P");
timertext.style.color = "white";
timertext.style.justifyContent = "center";
timertext.style.display = "flex";
timertext.style.margin = "9px";
timertext.style.fontFamily = "Arial";
bannerbg.appendChild(timertext);
//Loads banner into HTML
if (params.id) {
	var target = document.getElementById(target);
if (target){
	target.appendChild(bannerbg);
} else {
		document.body.insertBefore(bannerbg, document.body.firstchild);
}
} else {
	document.body.insertBefore(bannerbg, document.body.firstchild);
}

/*timer logic*/
const allnetdate = new Date("Nov, 1, 2026 15:00:00");
const oneDay = 1000 * 60 * 60 * 24;
function timer() {
var elapsed = Math.round((Date.now() - allnetdate.getTime()) / oneDay);
timertext.textContent = "".concat(elapsed, " Days");
}
//Border animation
var D4erroranim_flip = false;
var D4erroranim_val = 255;
function D4erroranim() {
if (D4erroranim_flip == false) {
	D4erroranim_val = D4erroranim_val - 40;
}	else {
		D4erroranim_val = D4erroranim_val + 40;
	}

if (D4erroranim_val < 150) {
	D4erroranim_flip = true;
} 
if (D4erroranim_val > 254) {
	D4erroranim_flip = false;
}

bannerbg.style.borderColor = "".concat("rgb(",D4erroranim_val,",0,0)");
}
//Initialise functions
timer();
setInterval(timer,1000);
if (params.anim) {
	if (params.anim = "false") {
} else {
	setInterval(D4erroranim,100);
}
} else {
	setInterval(D4erroranim,100);
}