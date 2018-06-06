function gladiatorInventory(input) {
    let inventory = input.shift().split(" ").filter(e => e !=="").map(e => e.trim());

    for (let i = 0; i < input.length; i++) {
       let [command, equipment] = input[i].split(" ").filter(e => e !=="").map(e => e.trim());
       if (command === "Buy" && !inventory.includes(equipment)) {
           inventory.push(equipment);
       }
       if (command === "Trash" && inventory.includes(equipment)) {
           let index = inventory.indexOf(equipment);
           inventory.splice(index,1);
       }
       if (command === "Repair" && inventory.includes(equipment)) {
           let index = inventory.indexOf(equipment);
           inventory.splice(index,1);
           inventory.push(equipment);
       }
       if (command === "Upgrade") {
           let [equip, upgrade] = equipment.split("-").map(e => e.trim());
           if (inventory.includes(equip)) {
               let index = inventory.indexOf(equip);
               inventory.splice(index + 1,0,`${equip}:${upgrade}`);
           }
       }
    }
    console.log(inventory.join(" "));
}

gladiatorInventory([
    'SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel',
    'Fight!'
]);