define([],function(){var e,t,n;return t=function(e){return e.slice(0,1).toUpperCase().concat(e.slice(1).toLowerCase())},n=function(e,n){return null==n&&(n=" "),e.split(n).map(t).join(n)},e=function(e){return e=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()}),e.slice(0,1).toUpperCase()+e.slice(1)},{toTitleCase:t,toWordTitleCase:n,lispToPascalCase:e}});
//# sourceMappingURL=string.min.js-vflW4_TwQ.map