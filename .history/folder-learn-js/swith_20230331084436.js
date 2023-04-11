var date = 2;
switch(date) {
    case 2:
        console.log('hom nay la thu 2');
        break;// neu ko co break thi tinh tu
    case 3: //===
        console.log('hom nay la thu 3');
        break;
    case 4:
        console.log('hom nay la thu 4');
        break;
    case 5:
        console.log('hom nay la thu 5');
        break;
    default:
        console.log('input sai');
        break;
}

switch(date) {
    case 2:
    case 3: //===
    case 4:
        console.log('hom nay la thu 4');
        break;
    case 5:
        console.log('hom nay la thu 5');
        break;
    default:
        console.log('input sai');
}