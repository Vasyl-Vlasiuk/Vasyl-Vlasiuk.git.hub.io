const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
   window.addEventListener('scroll', animOnScroll);

   function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
         const animItem = animItems[index];
         const animItemHeight = animItem.offsetHeight; // висота об'єкта
         const animItemOffset = offset(animItem).top;  // позиція об'єкта (значення зверху)
         animStart = 5;

         let animItemPoint = window.innerHeight - animItemHeight / animStart;

         if (animItemHeight - window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }

         if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('_active');
         } else {
            animItem.classList.remove('_active');
         }
      }
   }

   // функція що показує позицію елемента
   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {
         top: rect.top + scrollTop,
         left: rect.left + scrollLeft
      };
   }


   setTimeout(() => {
      animOnScroll();
   }, 300);

   setTimeout(() => {
      shake.classList.remove('shake');
   }, 800);

   const shake = document.querySelector('.shake');
}


function printA() {
   var answer = 1;
   console.log(answer);
}

printA();
printA();
