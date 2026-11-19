(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){function $(i){return document.getElementById(i);}
function on(a,f){a.forEach(function(x){x.addEventListener('input',f);x.addEventListener('change',f);});f();}
var sg=$('sc-g');if(sg){var ss=$('sc-s'),sv=$('sc-v');var W=[[0,4,32,'XXS'],[2,6,34,'XS'],[4,8,36,'S'],[6,10,38,'S'],[8,12,40,'M'],[10,14,42,'M'],[12,16,44,'L'],[14,18,46,'L'],[16,20,48,'XL'],[18,22,50,'XL'],[20,24,52,'XXL']];var M=[[14,36,'S'],[14.5,37,'S'],[15,38,'M'],[15.5,39,'M'],[16,40,'L'],[16.5,42,'L'],[17,43,'XL'],[17.5,44,'XL'],[18,46,'XXL']];
 function upd(){if(sg.value==='m'){ss.options[1].disabled=true;if(ss.value==='uk')ss.value='us';sv.step='0.5';}else{ss.options[1].disabled=false;sv.step='1';}var v=parseFloat(sv.value),r=null;
  if(sg.value==='w'){var c=ss.value==='us'?0:ss.value==='uk'?1:2;W.forEach(function(x){if(x[c]===v)r=x;});$('sc-o').innerHTML=r?'<strong>US '+r[0]+' &middot; UK '+r[1]+' &middot; EU '+r[2]+'</strong><p>Usually a letter size '+r[3]+'.</p><div class="mv-chips"><i>Check bust and waist</i><i>Brands vary</i></div>':'<strong>Check the size</strong><p>Use an even US size (0&ndash;20), UK 4&ndash;24 or EU 32&ndash;52.</p>';}
  else{var c2=ss.value==='eu'?1:0;M.forEach(function(x){if(x[c2]===v)r=x;});$('sc-o').innerHTML=r?'<strong>Collar '+r[0]+' in &middot; '+r[1]+' cm</strong><p>Usually a letter size '+r[2]+'.</p><div class="mv-chips"><i>Two fingers fit in the collar</i></div>':'<strong>Check the size</strong><p>US/UK collars 14&ndash;18 in half sizes, or EU 36&ndash;46.</p>';}}
 on([sg,ss,sv],upd);}
var fs=$('ff-s');if(fs){var fe=$('ff-f'),fc=$('ff-c');var F={hot:{crisp:['Linen','Cotton poplin'],soft:['Lyocell','Cotton voile'],stretch:['Cotton-elastane jersey','Lightweight technical knit']},mild:{crisp:['Cotton twill','Chambray'],soft:['Cotton jersey','Viscose'],stretch:['Ponte knit','Stretch denim']},cold:{crisp:['Wool flannel','Tweed'],soft:['Merino knit','Cashmere blend'],stretch:['Wool-elastane blend','Brushed fleece']}};
 on([fs,fe,fc],function(){var p=F[fs.value][fe.value],a=p[0],b=p[1],easy=fc.value==='easy';if(easy&&/Linen|Cashmere|Tweed|flannel|Viscose/.test(a)){var t=a;a=b;b=t;}
  $('ff-o').innerHTML='<strong>'+a+'</strong><p>Also good: '+b+'.</p><p>'+(easy?'Check the label for a 30&ndash;40&deg;C wash and line dry to make it last.':'Natural fibres reward gentle washing and a steam or iron.')+'</p>';});}
var sn=$('ss-n');if(sn){var sr=$('ss-r');var N={summer:[['Heavy knits','Wool coats','Boots'],['Linen and cotton','Sandals','Light layers']],autumn:[['Linen pieces','Sandals','Shorts'],['Light knits','Trench or jacket','Closed shoes']],winter:[['Light jackets','Thin cottons','Canvas shoes'],['Heavy knits','Wool coat','Boots and scarves']],spring:[['Heavy coats','Thick knits','Snow boots'],['Light jackets','Cotton knits','Trainers and loafers']]};
 on([sn,sr],function(){var n=N[sn.value],s=sr.value;$('ss-o').innerHTML='<strong>Bring out '+n[1].length+' groups</strong><ul><li><b>Store:</b> '+n[0].join(', ')+'</li><li><b>Bring out:</b> '+n[1].join(', ')+'</li></ul><p>'+(s==='small'?'With one rail, keep only 20&ndash;25 pieces out and store the rest in labelled boxes.':s==='mid'?'Wash everything before storing and fold knits rather than hanging them.':'Use the switch to edit: donate anything you didn&rsquo;t wear all season.')+'</p>';});}
})();
