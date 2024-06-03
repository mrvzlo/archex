(function(){var g={4515:function(g,A,t){"use strict";var n={};t.r(n);var I,C=t(3751),i=t(641),e=t(33),p=t(953);(function(g){g[g["None"]=0]="None",g[g["Dirt"]=1]="Dirt",g[g["Grass"]=2]="Grass",g[g["Gravel"]=3]="Gravel",g[g["Sand"]=4]="Sand",g[g["Ice"]=5]="Ice"})(I||(I={}));const s=["src"];var o=(0,i.pM)({__name:"spot-view",props:{spot:n["default"]},setup(g){const A=g,n=()=>{const g=C();return g("./"+A.spot.spotType+".png")},C=()=>{switch(A.spot.biomType){case I.None:return t(3467);case I.Grass:return t(6595);case I.Gravel:return t(1386);case I.Dirt:return t(9852);case I.Sand:return t(3483);case I.Ice:return t(3402)}};return(g,A)=>((0,i.uX)(),(0,i.CE)("div",null,[(0,i.Lk)("img",{src:n()},null,8,s)]))}});const c=o;var r,u=c,f=t(2012),d=t(4277),a=t(8137),m=t(9954),l=t(3426),b=t(8041),x="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAC8HpUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHja7ZdRktwqDEX/WUWWYEkIieVgMFXZQZafC6ad6Z7OR7/3lSpDGbDAF6ED9Ew4fv3s4QcSZU8hqnnKKW1IMcfMBQ3fzlRmSVuc5UxpdeH9yR6uDoZJUMv56quDHna6BM6qoKVfhLyujv25I8el7y9CayIZHjEabQnlJSR8dtASKGUtJbt9XcJ+nHV7rMTPJ4xCbGpfIq/v0RC9pjAK8yEkG0qR5YCMJwYpaKRZMgaSONoR9Sh5eYKAvIvTlTI86sPV+HbQE5WrRe/t4ZVW5DVEXoKcrvqtPZC+pzJD/2Xm6KvFz3aTUypsL9EfT+/N+1wzVlFiQqjTWtRjKbOFcTumGFN7gF7aDI9CwmbOyI5dXUGtbXXbkStlYuDqFKlRoU7HrCtVuBj5CGxoMFeWaXQxzlxl8IsjU2eTLA00WerEDpqXLzSnzVsNczbHzI0wlAlihE8+zuHTD3ofR4Fo8ytW8It5BBtuDHKjxDAQob6CqjPAj/yaBlcBQR1RHkckI7D7KbEr/bkJZIIWDFTU53Eha0sAIcLUCmdIQADUSJQSbcZsRAikA1CB6zhAvIMAqXKDkxxFEtg4j6nxidEcysowB9hxmYGE4sQZ2GQpgBWjYv9YdOyhoqJRVZOaumYtSVJMmlKyNC7FYmIxmFoyM7dsxcWjqyc3d89eMmfBpak5Zcuecy4FcxYoF3xdMKCUnXfZ465hT7vtvue9VGyfGqvWVK16zbU0btJwf7TUrHnLrRx0YCsd8dAjHXb4kY/SsdW6hB679tSte8+9XNQW1m/5A2q0qPEkNQbaRQ1Ws4cEjetEBzMA4xAJxG0gwIbmwWxzipEHucFsy4xToQwndTBrNIiBYDyItdODXeCT6CD3v7gFi0/c+L+SCwPdh+S+c3tHrY2foTqJnadwBHUTnD70H17Yy/ix+1aHv3V8Wt9Ct9AtdAvdQrfQLfQPCXX88TD+C/wNEOinnW4CEicAAAGFaUNDUElDQyBwcm9maWxlAAB4nH2RPUjDQBzFX1O1Ii0OdhBxCFgFwYKoiKNUsQgWSluhVQeTSz+EJg1Jiouj4Fpw8GOx6uDirKuDqyAIfoA4OzgpukiJ/0sKLWI8OO7Hu3uPu3eAUC8z1ewYB1TNMlLxmJjNrYiBV3RBQAhDGJWYqSfSCxl4jq97+Ph6F+VZ3uf+HCElbzLAJxLPMt2wiNeJpzctnfM+cZiVJIX4nHjMoAsSP3JddvmNc9FhgWeGjUxqjjhMLBbbWG5jVjJU4iniiKJqlC9kXVY4b3FWy1XWvCd/YTCvLae5TnMQcSwigSREyKhiA2VYiNKqkWIiRfsxD/+A40+SSybXBhg55lGBCsnxg//B727NwuSEmxSMAZ0vtv0xDAR2gUbNtr+PbbtxAvifgSut5a/UgZlP0mstLXIE9G4DF9ctTd4DLneA/iddMiRH8tMUCgXg/Yy+KQf03QI9q25vzX2cPgAZ6mrpBjg4BEaKlL3m8e7u9t7+PdPs7weGX3Kv0hA8OgAADRhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDQuNC4wLUV4aXYyIj4KIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgIHhtbG5zOkdJTVA9Imh0dHA6Ly93d3cuZ2ltcC5vcmcveG1wLyIKICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICB4bXBNTTpEb2N1bWVudElEPSJnaW1wOmRvY2lkOmdpbXA6NzM1NzE0M2UtODc2Yy00ZmQ1LTg1YjItY2RlNGQyZWU4NGFiIgogICB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmQyODBiZDYyLWZlMmEtNDVjYi1iN2ZmLWI5NzNiYzczMDA4YSIKICAgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjc0NDkzYzdmLWM1NGYtNGIwYS1iM2YzLTk2N2UzMzIzZTU0NSIKICAgZGM6Rm9ybWF0PSJpbWFnZS9wbmciCiAgIEdJTVA6QVBJPSIyLjAiCiAgIEdJTVA6UGxhdGZvcm09IldpbmRvd3MiCiAgIEdJTVA6VGltZVN0YW1wPSIxNzE3MzQyOTAzNzU1NTc0IgogICBHSU1QOlZlcnNpb249IjIuMTAuMzAiCiAgIHRpZmY6T3JpZW50YXRpb249IjEiCiAgIHhtcDpDcmVhdG9yVG9vbD0iR0lNUCAyLjEwIj4KICAgPHhtcE1NOkhpc3Rvcnk+CiAgICA8cmRmOlNlcT4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NTVhYTk2NTYtMThkOS00NmFkLWI4MzUtYmYxN2U0YjRiMGZkIgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJHaW1wIDIuMTAgKFdpbmRvd3MpIgogICAgICBzdEV2dDp3aGVuPSIyMDI0LTA2LTAyVDE4OjQxOjQzIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PoHhdEsAAAAGYktHRABQAFQAR0JdJusAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfoBgIPKSvwLC/yAAADNklEQVR42u3dOWsUYRzH8W9M4hGPGI1GjVdEfANWdnkDYiX2FqktbGUiNjba2duJeAUPJPFIVuOBxgPFA6PGA0SwsBBBMRiLmcCyxrj7PM/kmeeZ3x8ekmpn+HxnHgKZ3QWNRqPRaDQaTXGnHzgMzBOFH/ypbJ0DOkXiB396fQb2Ai3imXv86jUO7AO6HByrCdgK9GV32QHhz45fvX4Bo8AhYBewDWjLUGunBVgFbAf2AAeBAeDTDK/bL3zzNQl8BT4CE8AH4Avwo8HXKWWExEEAlyvXCM0FDFDJfvYW5Hx6s+1spCwBShWhucBbUSkiFDlAKSIUPUD0EUIIEHWEUAJEGyGkAFFGCC1AdBFCDBBVhFADRBMh5ABRRAg9QPARYggQdIRYAgQbIaYAQUaILUBwEWIMEFSEWAMEEyHmAEFEiD1A4SPEGKAD+BlKhNgCdAM3gR5gMIQIMQVYDwyTPhm3A2gHhgoeYSQm/Ff8/VDVUWZ+RLEID38lseNXR6BgEUqDX8Q7oXT40+tIASKUFr86gq/tKCr8cQsIH3dCNPgbLPGnsjunYw7vBF35Nfjd/zlOIvx8rvyXdeC7jCD8Gvx1DR43Eb4b/BfAWsPjJ2XHf22J/9wC3ySC8KvWM2CNo/NJhN84fpfj80qEX996mgP+bBGiwd/oAP8JsDrn80yE7w+/OkJU+G8s8R+TfgaExsOVL3yP+I/QBzh523YeAitF2fhscoD/QPj+8MeAFaI0w39riX+ff/8zRZPzlX9P+H7xl4vSz7ZzV/hms9kB/h3h+8VvF6UZ/oQl/i1gmSj9XPmjwveLv1SUfradG8I3mx4H+BXh+7vyK8ASUfrBHxa+v23nOrBYlH7wrwnfHP+dJf5V0i9Y0HjAvyJ8f/hDwCJR+sEfFL7ZbHGAf1n4fvEXitIM/70l/iXh+7vyLwrfH/4FYIEo/Ww754XvD39A+GbTRvpWTlv8+aI0m/2W+GeFbzdjFvhnhG8/3w3xTwOt4rOfbwb4p4TvbkYbxD8pfLfT1yC+vsvd8bQCt+vAPyH8/KaT9P+0M8H/Bo4JP59pqvl9J7Cb9ON/J0nfBno8+1NVk8P8Ab/oTBSHvKngAAAAAElFTkSuQmCC",v=t(9436),k=t(8533),h=t(1182),X="data:image/png;base64,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";(function(g){g[g["Empty"]=0]="Empty",g[g["Tree"]=1]="Tree",g[g["Forest"]=2]="Forest",g[g["Hill"]=3]="Hill",g[g["Mountain"]=4]="Mountain",g[g["Cave"]=5]="Cave",g[g["City"]=6]="City",g[g["Fortress"]=7]="Fortress",g[g["House"]=8]="House",g[g["Tower"]=9]="Tower",g[g["BigTower"]=10]="BigTower",g[g["DeadTrees"]=11]="DeadTrees",g[g["Lake"]=12]="Lake",g[g["Farm"]=13]="Farm"})(r||(r={}));const y={class:"button"},E={class:"inner"},N={class:"grid",style:{"--count":"2"}},T=(0,i.Lk)("img",{src:f},null,-1),R=[T],D=(0,i.Lk)("img",{src:d},null,-1),B=[D],S=(0,i.Lk)("img",{src:a},null,-1),w=[S],G=(0,i.Lk)("img",{src:m},null,-1),L=[G],j=(0,i.Lk)("img",{src:l},null,-1),M=[j],W=(0,i.Lk)("img",{src:b},null,-1),Q=[W],H=(0,i.Lk)("img",{class:"invert",src:x},null,-1),J={class:"button"},F={class:"inner",style:{"--count":"2"}},Z={class:"grid"},V=(0,i.Lk)("img",{src:v},null,-1),K=[V],O=(0,i.Lk)("img",{src:k},null,-1),U=[O],P=(0,i.Lk)("img",{src:h},null,-1),z=[P],Y=(0,i.Lk)("img",{class:"invert",src:X},null,-1);var q=(0,i.pM)({__name:"tool-bar",props:{selectFunc:Function},setup(g){const A=g,t=(g,t=I.None)=>{A.selectFunc({biomType:t,spotType:g})};return(g,A)=>((0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.Lk)("div",y,[(0,i.Lk)("div",E,[(0,i.Lk)("div",N,[(0,i.Lk)("div",{class:"spot",onClick:A[0]||(A[0]=g=>t((0,p.R1)(r).House))},R),(0,i.Lk)("div",{class:"spot even",onClick:A[1]||(A[1]=g=>t((0,p.R1)(r).Tower))},B),(0,i.Lk)("div",{class:"spot",onClick:A[2]||(A[2]=g=>t((0,p.R1)(r).BigTower))},w),(0,i.Lk)("div",{class:"spot even",onClick:A[3]||(A[3]=g=>t((0,p.R1)(r).Farm))},L),(0,i.Lk)("div",{class:"spot",onClick:A[4]||(A[4]=g=>t((0,p.R1)(r).City))},M),(0,i.Lk)("div",{class:"spot even",onClick:A[5]||(A[5]=g=>t((0,p.R1)(r).Cave))},Q)])]),H]),(0,i.Lk)("div",J,[(0,i.Lk)("div",F,[(0,i.Lk)("div",Z,[(0,i.Lk)("div",{class:"spot",onClick:A[6]||(A[6]=g=>t((0,p.R1)(r).Empty,(0,p.R1)(I).Grass))},K),(0,i.Lk)("div",{class:"spot even",onClick:A[7]||(A[7]=g=>t((0,p.R1)(r).Tree,(0,p.R1)(I).Grass))},U),(0,i.Lk)("div",{class:"spot",onClick:A[8]||(A[8]=g=>t((0,p.R1)(r).Forest,(0,p.R1)(I).Grass))},z)])]),Y])],64))}});const _=q;var $=_;t(4114);class gg{createField(g,A){const t={spots:[],width:g,height:A},n=A*g;for(let I=0;I<n;I++){const g=this.getBiom(I,t),A=this.getSpot(I,t),n={empty:!0,biomType:g,spotType:A};t.spots.push(n)}return this.formatField(t),this.setMatches(t,null),t}getBiom(g,A){const t=A.height*A.width,n=Math.floor(t/2);return g<3*A.width?I.Gravel:this.getDistance(n,g,A.width)<2?I.Grass:I.Dirt}getSpot(g,A){const t=A.height*A.width,n=Math.floor(t/2);return g===n?r.House:g<2*A.width?r.Mountain:g<3*A.width?r.Empty:g>=t-2*A.width?r.Hill:this.getDistance(n,g,A.width)<2?r.Tree:r.Empty}formatField(g){g.spots.forEach(((A,t)=>{const n=Math.floor(t/g.width);A.evenRow=n%2==1;const I=t%g.width,C=A.evenRow?-1:0,i=g.width-0;A.available=I>C&&I<i}))}getDistance(g,A,t){let n=g%t;const I=Math.floor(g/t);I%2==1&&(n+=.5);let C=A%t;const i=Math.floor(A/t);i%2==1&&(C+=.5);const e=Math.abs(n-C),p=Math.abs(I-i),s=2*e,o=p>s?(p-s)/2:(s+p)%2;return o+s}setMatches(g,A){g.spots.forEach((g=>g.mismatch=!this.checkMatch(g,A)))}checkMatch(g,A){return!A||(A.spotType===r.Cave?g.spotType===r.Mountain:A.spotType===r.Farm?g.biomType===I.Grass:A.biomType===I.Grass?g.biomType===I.Dirt:g.spotType!==r.Mountain&&g.spotType===r.Cave)}}const Ag=["onClick"],tg={class:"toolbar"},ng=5,Ig=11;var Cg=(0,i.pM)({__name:"field-view",setup(g){const A=new gg,t=(0,p.Kh)(A.createField(ng,Ig)),n=(0,p.Kh)({hover:!1}),C=(0,p.Kh)({x:0,y:0});let s=(0,p.Kh)({spot:null});const o=g=>{if(!n.hover)return;const A=t.spots[g];A.mismatch||(A.spotType=s.spot.spotType,s.spot.biomType!==I.None&&(A.biomType=s.spot.biomType),r())},c=g=>{s.spot=g,n.hover=!0,A.setMatches(t,g)};window.onmousemove=g=>{C.x=g.clientX,C.y=g.clientY},window.onkeyup=g=>{"Escape"===g.code&&r()};const r=()=>{n.hover=!1,s.spot=null,A.setMatches(t,null)};return(g,A)=>((0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.Lk)("div",{class:(0,e.C4)(["grid map",{hoverable:n.hover}]),style:(0,e.Tr)("--count:"+ng)},[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(t.spots,((g,A)=>((0,i.uX)(),(0,i.CE)("div",{class:(0,e.C4)([{empty:g.empty,disabled:!g.available,odd:!g.evenRow,even:g.evenRow,mismatch:g.mismatch},"spot"]),key:A,onClick:g=>o(A)},[(0,i.bF)(u,{spot:g},null,8,["spot"])],10,Ag)))),128))],6),(0,i.Lk)("div",tg,[(0,i.bF)($,{selectFunc:c})]),(0,p.R1)(s).spot?((0,i.uX)(),(0,i.CE)("div",{key:0,class:"cursor-img",style:(0,e.Tr)(`top:${C.y}px;left:${C.x}px;`)},[(0,i.bF)(u,{spot:(0,p.R1)(s).spot},null,8,["spot"])],4)):(0,i.Q3)("",!0)],64))}});const ig=Cg;var eg=ig,pg=(0,i.pM)({__name:"app",setup(g){return(g,A)=>((0,i.uX)(),(0,i.Wv)(eg))}});const sg=pg;var og=sg;(0,C.Ef)(og).mount("#app")},9852:function(g,A,t){var n={"./0.png":6705,"./1.png":5576,"./10.png":4426,"./11.png":5187,"./12.png":696,"./13.png":3409,"./14.png":318,"./15.png":311,"./16.png":1580,"./17.png":9093,"./2.png":1187,"./21.png":7026,"./22.png":2169,"./23.png":7344,"./3.png":9274,"./4.png":9701,"./5.png":3788,"./6.png":1367,"./7.png":8222,"./8.png":1257,"./9.png":5008};function I(g){var A=C(g);return t(A)}function C(g){if(!t.o(n,g)){var A=new Error("Cannot find module '"+g+"'");throw A.code="MODULE_NOT_FOUND",A}return n[g]}I.keys=function(){return Object.keys(n)},I.resolve=C,g.exports=I,I.id=9852},6595:function(g,A,t){var n={"./0.png":9436,"./1.png":8533,"./10.png":865,"./11.png":8824,"./12.png":803,"./13.png":970,"./14.png":3029,"./15.png":1404,"./16.png":8439,"./17.png":6302,"./2.png":1182,"./21.png":9157,"./22.png":5150,"./23.png":4375,"./3.png":9495,"./4.png":7976,"./5.png":2193,"./6.png":2026,"./7.png":9603,"./8.png":5588,"./9.png":1885};function I(g){var A=C(g);return t(A)}function C(g){if(!t.o(n,g)){var A=new Error("Cannot find module '"+g+"'");throw A.code="MODULE_NOT_FOUND",A}return n[g]}I.keys=function(){return Object.keys(n)},I.resolve=C,g.exports=I,I.id=6595},1386:function(g,A,t){var n={"./0.png":571,"./1.png":9026,"./10.png":8184,"./11.png":8129,"./12.png":3466,"./13.png":5043,"./14.png":4876,"./15.png":7765,"./16.png":2014,"./17.png":3351,"./2.png":7209,"./21.png":8612,"./22.png":3887,"./23.png":86,"./3.png":3008,"./4.png":1039,"./5.png":7238,"./6.png":9005,"./7.png":5764,"./8.png":5955,"./9.png":9770};function I(g){var A=C(g);return t(A)}function C(g){if(!t.o(n,g)){var A=new Error("Cannot find module '"+g+"'");throw A.code="MODULE_NOT_FOUND",A}return n[g]}I.keys=function(){return Object.keys(n)},I.resolve=C,g.exports=I,I.id=1386},3402:function(g,A,t){var n={"./0.png":5755,"./1.png":2098,"./10.png":2376,"./11.png":3505,"./12.png":6074,"./13.png":7987,"./14.png":588,"./15.png":6501,"./16.png":5022,"./17.png":4519,"./2.png":6105,"./21.png":2804,"./22.png":1711,"./23.png":2694,"./3.png":352,"./4.png":6223,"./5.png":7478,"./6.png":4893,"./7.png":3764,"./8.png":9059,"./9.png":8298};function I(g){var A=C(g);return t(A)}function C(g){if(!t.o(n,g)){var A=new Error("Cannot find module '"+g+"'");throw A.code="MODULE_NOT_FOUND",A}return n[g]}I.keys=function(){return Object.keys(n)},I.resolve=C,g.exports=I,I.id=3402},3467:function(g,A,t){var n={"./0.png":8036,"./1.png":8285,"./10.png":8137,"./11.png":1232,"./12.png":1083,"./13.png":9954,"./14.png":6301,"./15.png":5172,"./16.png":4079,"./17.png":5062,"./2.png":7958,"./21.png":9133,"./22.png":7510,"./23.png":3839,"./3.png":1247,"./4.png":9920,"./5.png":8041,"./6.png":3426,"./7.png":8251,"./8.png":2012,"./9.png":4277};function I(g){var A=C(g);return t(A)}function C(g){if(!t.o(n,g)){var A=new Error("Cannot find module '"+g+"'");throw A.code="MODULE_NOT_FOUND",A}return n[g]}I.keys=function(){return Object.keys(n)},I.resolve=C,g.exports=I,I.id=3467},3483:function(g,A,t){var n={"./0.png":7828,"./1.png":1069,"./10.png":7577,"./11.png":1328,"./12.png":1499,"./13.png":994,"./14.png":2717,"./15.png":5236,"./16.png":6703,"./17.png":5158,"./2.png":5654,"./20.png":8628,"./21.png":2525,"./22.png":8550,"./23.png":5487,"./3.png":9455,"./4.png":1424,"./5.png":5625,"./6.png":1090,"./7.png":2635,"./8.png":8620,"./9.png":245};function I(g){var A=C(g);return t(A)}function C(g){if(!t.o(n,g)){var A=new Error("Cannot find module '"+g+"'");throw A.code="MODULE_NOT_FOUND",A}return n[g]}I.keys=function(){return Object.keys(n)},I.resolve=C,g.exports=I,I.id=3483},6705:function(g,A,t){"use strict";g.exports=t.p+"img/0.986933d8.png"},5576:function(g,A,t){"use strict";g.exports=t.p+"img/1.cda008d3.png"},4426:function(g,A,t){"use strict";g.exports=t.p+"img/10.f56d7fa8.png"},5187:function(g,A,t){"use strict";g.exports=t.p+"img/11.269f9a61.png"},696:function(g,A,t){"use strict";g.exports=t.p+"img/12.9da0580d.png"},3409:function(g,A,t){"use strict";g.exports=t.p+"img/13.9bd94e1a.png"},318:function(g,A,t){"use strict";g.exports=t.p+"img/14.08008101.png"},311:function(g,A,t){"use strict";g.exports=t.p+"img/15.d4286425.png"},1580:function(g,A,t){"use strict";g.exports=t.p+"img/16.fcbeb6c2.png"},9093:function(g,A,t){"use strict";g.exports=t.p+"img/17.8db01167.png"},1187:function(g,A,t){"use strict";g.exports=t.p+"img/2.1335b2b7.png"},7026:function(g,A,t){"use strict";g.exports=t.p+"img/21.a2397415.png"},2169:function(g,A,t){"use strict";g.exports=t.p+"img/22.09a50ac8.png"},7344:function(g,A,t){"use strict";g.exports=t.p+"img/23.d8e17eb4.png"},9274:function(g,A,t){"use strict";g.exports=t.p+"img/3.86b515d9.png"},9701:function(g,A,t){"use strict";g.exports=t.p+"img/4.fc4e2ced.png"},3788:function(g,A,t){"use strict";g.exports=t.p+"img/5.a25381a6.png"},1367:function(g,A,t){"use strict";g.exports=t.p+"img/6.ed0e84be.png"},8222:function(g,A,t){"use strict";g.exports=t.p+"img/7.0b13cd3d.png"},1257:function(g,A,t){"use strict";g.exports=t.p+"img/8.18c11351.png"},5008:function(g,A,t){"use strict";g.exports=t.p+"img/9.8bb95a8f.png"},9436:function(g,A,t){"use strict";g.exports=t.p+"img/0.ac1b7598.png"},8533:function(g,A,t){"use strict";g.exports=t.p+"img/1.21552a5a.png"},865:function(g,A,t){"use strict";g.exports=t.p+"img/10.78bd07c3.png"},8824:function(g,A,t){"use strict";g.exports=t.p+"img/11.561904a0.png"},803:function(g,A,t){"use strict";g.exports=t.p+"img/12.34f4f15f.png"},970:function(g,A,t){"use strict";g.exports=t.p+"img/13.cabd2ebe.png"},3029:function(g,A,t){"use strict";g.exports=t.p+"img/14.771ff7dd.png"},1404:function(g,A,t){"use strict";g.exports=t.p+"img/15.480c795f.png"},8439:function(g,A,t){"use strict";g.exports=t.p+"img/16.cc9fbfaf.png"},6302:function(g,A,t){"use strict";g.exports=t.p+"img/17.26c5a08b.png"},1182:function(g,A,t){"use strict";g.exports=t.p+"img/2.cfa60139.png"},9157:function(g,A,t){"use strict";g.exports=t.p+"img/21.47225a63.png"},5150:function(g,A,t){"use strict";g.exports=t.p+"img/22.8b139813.png"},4375:function(g,A,t){"use strict";g.exports=t.p+"img/23.35c574d4.png"},9495:function(g,A,t){"use strict";g.exports=t.p+"img/3.f187808a.png"},7976:function(g,A,t){"use strict";g.exports=t.p+"img/4.f827cf26.png"},2193:function(g,A,t){"use strict";g.exports=t.p+"img/5.89c7ab3b.png"},2026:function(g,A,t){"use strict";g.exports=t.p+"img/6.863382de.png"},9603:function(g,A,t){"use strict";g.exports=t.p+"img/7.1759bdf7.png"},5588:function(g,A,t){"use strict";g.exports=t.p+"img/8.1cc25b7a.png"},1885:function(g,A,t){"use strict";g.exports=t.p+"img/9.25d616e8.png"},571:function(g,A,t){"use strict";g.exports=t.p+"img/0.2aac456e.png"},9026:function(g,A,t){"use strict";g.exports=t.p+"img/1.e5174db0.png"},8184:function(g,A,t){"use strict";g.exports=t.p+"img/10.56e0fe39.png"},8129:function(g,A,t){"use strict";g.exports=t.p+"img/11.19d07d44.png"},3466:function(g,A,t){"use strict";g.exports=t.p+"img/12.10ffc14d.png"},5043:function(g,A,t){"use strict";g.exports=t.p+"img/13.8ed0dd0f.png"},4876:function(g,A,t){"use strict";g.exports=t.p+"img/14.f960ba8f.png"},7765:function(g,A,t){"use strict";g.exports=t.p+"img/15.fb35b8d6.png"},2014:function(g,A,t){"use strict";g.exports=t.p+"img/16.87b54734.png"},3351:function(g,A,t){"use strict";g.exports=t.p+"img/17.60f1239b.png"},7209:function(g,A,t){"use strict";g.exports=t.p+"img/2.74cbb430.png"},8612:function(g,A,t){"use strict";g.exports=t.p+"img/21.af3b49e3.png"},3887:function(g,A,t){"use strict";g.exports=t.p+"img/22.54e066ee.png"},86:function(g,A,t){"use strict";g.exports=t.p+"img/23.275d0741.png"},3008:function(g,A,t){"use strict";g.exports=t.p+"img/3.34cdbe7d.png"},1039:function(g,A,t){"use strict";g.exports=t.p+"img/4.e69f4b80.png"},7238:function(g,A,t){"use strict";g.exports=t.p+"img/5.fb8ad8be.png"},9005:function(g,A,t){"use strict";g.exports=t.p+"img/6.24b754ce.png"},5764:function(g,A,t){"use strict";g.exports=t.p+"img/7.8236216c.png"},5955:function(g,A,t){"use strict";g.exports=t.p+"img/8.b38d65ee.png"},9770:function(g,A,t){"use strict";g.exports=t.p+"img/9.ea46335c.png"},5755:function(g,A,t){"use strict";g.exports=t.p+"img/0.559c4834.png"},2098:function(g,A,t){"use strict";g.exports=t.p+"img/1.565dfba9.png"},2376:function(g,A,t){"use strict";g.exports=t.p+"img/10.25e345b3.png"},3505:function(g,A,t){"use strict";g.exports=t.p+"img/11.623c6bef.png"},6074:function(g,A,t){"use strict";g.exports=t.p+"img/12.8f0f9f01.png"},7987:function(g,A,t){"use strict";g.exports=t.p+"img/13.87a6b41d.png"},588:function(g,A,t){"use strict";g.exports=t.p+"img/14.a18502d1.png"},6501:function(g,A,t){"use strict";g.exports=t.p+"img/15.f2f6280d.png"},5022:function(g,A,t){"use strict";g.exports=t.p+"img/16.8deb6313.png"},4519:function(g,A,t){"use strict";g.exports=t.p+"img/17.03113478.png"},6105:function(g,A,t){"use strict";g.exports=t.p+"img/2.a448a0de.png"},2804:function(g,A,t){"use strict";g.exports=t.p+"img/21.34a35c9b.png"},1711:function(g,A,t){"use strict";g.exports=t.p+"img/22.2e4d01c1.png"},2694:function(g,A,t){"use strict";g.exports=t.p+"img/23.74f61447.png"},352:function(g,A,t){"use strict";g.exports=t.p+"img/3.7f22ef58.png"},6223:function(g,A,t){"use strict";g.exports=t.p+"img/4.c6c04d7c.png"},7478:function(g,A,t){"use strict";g.exports=t.p+"img/5.4bd67360.png"},4893:function(g,A,t){"use strict";g.exports=t.p+"img/6.3a696a96.png"},3764:function(g,A,t){"use strict";g.exports=t.p+"img/7.e45d2e5f.png"},9059:function(g,A,t){"use strict";g.exports=t.p+"img/8.233bf11c.png"},8298:function(g,A,t){"use strict";g.exports=t.p+"img/9.2bd820b7.png"},8036:function(g){"use strict";g.exports="data:image/png;base64,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"},8285:function(g,A,t){"use strict";g.exports=t.p+"img/1.c3440d23.png"},8137:function(g,A,t){"use strict";g.exports=t.p+"img/10.f4f09967.png"},1232:function(g,A,t){"use strict";g.exports=t.p+"img/11.160694d8.png"},1083:function(g,A,t){"use strict";g.exports=t.p+"img/12.8af61176.png"},9954:function(g,A,t){"use strict";g.exports=t.p+"img/13.a487f068.png"},6301:function(g,A,t){"use strict";g.exports=t.p+"img/14.cd9fb0a4.png"},5172:function(g,A,t){"use strict";g.exports=t.p+"img/15.67bf9b4f.png"},4079:function(g,A,t){"use strict";g.exports=t.p+"img/16.06075e1d.png"},5062:function(g,A,t){"use strict";g.exports=t.p+"img/17.06c915a2.png"},7958:function(g,A,t){"use strict";g.exports=t.p+"img/2.2edd335c.png"},9133:function(g,A,t){"use strict";g.exports=t.p+"img/21.c1a357c9.png"},7510:function(g,A,t){"use strict";g.exports=t.p+"img/22.45f05941.png"},3839:function(g,A,t){"use strict";g.exports=t.p+"img/23.bb020103.png"},1247:function(g,A,t){"use strict";g.exports=t.p+"img/3.74cb479a.png"},9920:function(g,A,t){"use strict";g.exports=t.p+"img/4.632574f9.png"},8041:function(g,A,t){"use strict";g.exports=t.p+"img/5.590422c6.png"},3426:function(g,A,t){"use strict";g.exports=t.p+"img/6.bc2381ea.png"},8251:function(g,A,t){"use strict";g.exports=t.p+"img/7.f3401ce9.png"},2012:function(g,A,t){"use strict";g.exports=t.p+"img/8.f87c2edb.png"},4277:function(g,A,t){"use strict";g.exports=t.p+"img/9.f33c1202.png"},7828:function(g,A,t){"use strict";g.exports=t.p+"img/0.c44b8b9e.png"},1069:function(g,A,t){"use strict";g.exports=t.p+"img/1.630385f7.png"},7577:function(g,A,t){"use strict";g.exports=t.p+"img/10.edf7d5d7.png"},1328:function(g,A,t){"use strict";g.exports=t.p+"img/11.b79e7c3b.png"},1499:function(g,A,t){"use strict";g.exports=t.p+"img/12.2ec62f8c.png"},994:function(g,A,t){"use strict";g.exports=t.p+"img/13.a6ed4df0.png"},2717:function(g,A,t){"use strict";g.exports=t.p+"img/14.036d7fdb.png"},5236:function(g,A,t){"use strict";g.exports=t.p+"img/15.6a29970a.png"},6703:function(g,A,t){"use strict";g.exports=t.p+"img/16.112faed1.png"},5158:function(g,A,t){"use strict";g.exports=t.p+"img/17.50f4a182.png"},5654:function(g,A,t){"use strict";g.exports=t.p+"img/2.1f725798.png"},8628:function(g,A,t){"use strict";g.exports=t.p+"img/20.7e231925.png"},2525:function(g,A,t){"use strict";g.exports=t.p+"img/21.3e2d4a8f.png"},8550:function(g,A,t){"use strict";g.exports=t.p+"img/22.5c4d5746.png"},5487:function(g,A,t){"use strict";g.exports=t.p+"img/23.682b25d3.png"},9455:function(g,A,t){"use strict";g.exports=t.p+"img/3.23fae275.png"},1424:function(g,A,t){"use strict";g.exports=t.p+"img/4.803778cd.png"},5625:function(g,A,t){"use strict";g.exports=t.p+"img/5.e30119f6.png"},1090:function(g,A,t){"use strict";g.exports=t.p+"img/6.895dfc90.png"},2635:function(g,A,t){"use strict";g.exports=t.p+"img/7.37e6b6dc.png"},8620:function(g,A,t){"use strict";g.exports=t.p+"img/8.ada1a0a6.png"},245:function(g,A,t){"use strict";g.exports=t.p+"img/9.372bf4e2.png"}},A={};function t(n){var I=A[n];if(void 0!==I)return I.exports;var C=A[n]={exports:{}};return g[n].call(C.exports,C,C.exports,t),C.exports}t.m=g,function(){var g=[];t.O=function(A,n,I,C){if(!n){var i=1/0;for(o=0;o<g.length;o++){n=g[o][0],I=g[o][1],C=g[o][2];for(var e=!0,p=0;p<n.length;p++)(!1&C||i>=C)&&Object.keys(t.O).every((function(g){return t.O[g](n[p])}))?n.splice(p--,1):(e=!1,C<i&&(i=C));if(e){g.splice(o--,1);var s=I();void 0!==s&&(A=s)}}return A}C=C||0;for(var o=g.length;o>0&&g[o-1][2]>C;o--)g[o]=g[o-1];g[o]=[n,I,C]}}(),function(){t.d=function(g,A){for(var n in A)t.o(A,n)&&!t.o(g,n)&&Object.defineProperty(g,n,{enumerable:!0,get:A[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(g){if("object"===typeof window)return window}}()}(),function(){t.o=function(g,A){return Object.prototype.hasOwnProperty.call(g,A)}}(),function(){t.r=function(g){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(g,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(g,"__esModule",{value:!0})}}(),function(){t.p="/big-city-life/"}(),function(){var g={524:0};t.O.j=function(A){return 0===g[A]};var A=function(A,n){var I,C,i=n[0],e=n[1],p=n[2],s=0;if(i.some((function(A){return 0!==g[A]}))){for(I in e)t.o(e,I)&&(t.m[I]=e[I]);if(p)var o=p(t)}for(A&&A(n);s<i.length;s++)C=i[s],t.o(g,C)&&g[C]&&g[C][0](),g[C]=0;return t.O(o)},n=self["webpackChunkbig_city_life"]=self["webpackChunkbig_city_life"]||[];n.forEach(A.bind(null,0)),n.push=A.bind(null,n.push.bind(n))}();var n=t.O(void 0,[504],(function(){return t(4515)}));n=t.O(n)})();
//# sourceMappingURL=app.88da7cd6.js.map