let activeIndex = 0;

const cardGroups = document.getElementsByClassName("cards-container");

console.log(cardGroups);

const handleLikeButtonClick = () => {
    const nextIndex = activeIndex + 1 <= cardGroups.length - 1 ? activeIndex + 1 : 0;

    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
        nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

    // active and next group data status update
    currentGroup.dataset.status = "after";
    nextGroup.dataset.status = "active";

    activeIndex = nextIndex;
}