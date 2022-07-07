import Stack from "./Stack";

class Tower {
  constructor() {
    //Atributos
    this.disks = new Stack(); //Almacen de discos
  }

  add(disk) {
    this.disks.push(disk);
    return this;
  }

  moveTopTo(towerDestination) {
    //Mover el disco que se encuentra en top hacia la torre destino
    let disk = this.disks.top.value;
    console.log(this.disks.top.value);
    if (
      towerDestination.disks.top === null ||
      disk < towerDestination.disks.top.value
    ) {
      towerDestination.disks.push(disk);
      this.disks.pop();
      return true;
    }
  }

  moveDisk(disks, towerDestination, auxTower) {
    if (disks === 0) {
      return true;
    }
    if (disks === 1) {
      this.moveTopTo(towerDestination);
    }

    if (disks >= 2) {
      this.moveDisk(disks - 1, auxTower, towerDestination);
      this.moveTopTo(towerDestination);
      auxTower.moveDisk(disks - 1, towerDestination, this);
    }
  }
}

export default Tower;
