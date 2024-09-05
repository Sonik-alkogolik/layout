document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('.custom-checkbox-label');

    if (!checkboxes.length) {
        console.error('Чекбоксы не найдены!');
        return;
    }

    checkboxes.forEach(function(label) {
        label.addEventListener('click', function() {
            checkboxes.forEach(function(otherLabel) {
                if (otherLabel !== label) {
                    otherLabel.classList.remove('checked');
                    otherLabel.querySelector('input').checked = false;
                }
            });
            this.classList.toggle('checked');
            this.querySelector('input').checked = !this.querySelector('input').checked;
        });
    });

    const filterItems = document.querySelectorAll('.filter-item');

    filterItems.forEach(function(item) {
        item.addEventListener('click', function(e) {
            const target = e.target;

            if (target.closest('.filter-name')) {
                const filterList = this.querySelector('.filter-list');
                if (filterList) {
                    if (filterList.classList.contains('list_active')) {
                        filterList.classList.remove('list_active');
                    } else {
                        filterItems.forEach(function(i) {
                            const otherFilterList = i.querySelector('.filter-list');
                            if (otherFilterList) {
                                otherFilterList.classList.remove('list_active');
                            }
                        });

                        filterList.classList.add('list_active');
                    }
                }
            }
        });
    });

     const reset  = document.querySelector('.reset-filter');
     reset.addEventListener("click", () => {
        location.reload();
     })
});