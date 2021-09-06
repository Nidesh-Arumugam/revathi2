const data = [
    {
        id: '1',
        option: 'Background Color'
    },
    {
        id: '2',
        option: 'Your Name'
    },
    {
        id: '3',
        option: 'Contact button color'
    },
    {
        id: '4',
        option: 'Menu text color'
    },
    {
        id: '5',
        option: 'Designation'
    },
    {
        id: '6',
        option: 'Contact button text color'
    },
]
function test(color,id)
{
    if(id == 1)
    {
        document.getElementById('container').style.backgroundColor = color;
    }
    else if(id == 2)
    {
        document.getElementById('yourName').style.color = color;
    }
    else if(id == 3)
    {
        document.getElementById('contactButton').style.backgroundColor = color;
    }
    else if(id == 4)
    {
        document.getElementById('menu').style.color = color;
        document.getElementById('menu1').style.color = color;
    }
    else if(id == 5)
    {
        document.getElementById('designation').style.color = color;
    }
    else if(id == 6)
    {
        document.getElementById('contactButton').style.color = color;
    }
}