let drag_and_drop = () => {
   let puc = document.querySelector('.pacman')
   let li = document.querySelectorAll('.item')

   let dr_st = function () {
      setTimeout(() => {
         this.classList.add('hide')
         console.log('start');
      })

   }
   let dr_end = function () {
      this.classList.remove('hide')
      console.log('end');
   }
   let dr_ov = function (event) {
      event.preventDefault();
   }
   let dr_entr = function () {
      this.classList.add('hovered')
   }
   let dr_lv = function () {
      this.classList.remove('hovered')
   }
   let dr_op = function () {
      this.append(puc)
      this.classList.remove('hovered')
   }
   for (let item of li) {
      item.addEventListener('dragover', dr_ov)
      item.addEventListener('dragenter', dr_entr)
      item.addEventListener('dragleave', dr_lv)
      item.addEventListener('drop', dr_op)
   }
   puc.addEventListener('dragstart', dr_st)
   puc.addEventListener('dragend', dr_end)


}

drag_and_drop()