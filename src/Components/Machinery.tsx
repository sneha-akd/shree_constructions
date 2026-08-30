import React from 'react';

import poclain from "../../src/assets/poclain.png";
import excavator from "../../src/assets/excavator.png";
import tipper from "../../src/assets/tipper.png";
import concrete_mixture from "../../src/assets/concrete_mixture.png";
import shuttering from "../../src/assets/shuttering.jpg";
import plate_compactor from "../../src/assets/plate_compactor.png";
import vibro_compactor from "../../src/assets/vibro_compactor.png";
import cement_mixture from "../../src/assets/cement_mixture.png";
import lift from "../../src/assets/lift.png";
import cube_testing from "../../src/assets/cube_tester.png";
import cube_mold from "../../src/assets/cube_mold.png";
import crane from "../../src/assets/hydra_crane.png";
import pump from "../../src/assets/mud_pump.png";
import steel_bender from "../../src/assets/steel_bending.png";
import steel_cutter from "../../src/assets/steel_cutter.png";

const machines = [
  {
    name: "Poclain",
    count: "02 Nos",
    img: poclain,
  }, {
    name: "Excavator",
    count: "02 Nos",
    img: excavator,
  }, {
    name: "Tipper/Truck",
    count: "02 Nos",
    img: tipper,
  }, {
    name: "Concrete Self Mixture (AJAX)",
    count: "02 Nos",
    img: concrete_mixture,
  }, {
    name: "Shuttering Materials",
    count: "Inventory based",
    img: shuttering,
  }, {
    name: "Compactor Machine (Plate Type)",
    count: "08 Nos",
    img: plate_compactor,
  }, {
    name: "Vibro Compactor Machine",
    count: "01 Nos",
    img: vibro_compactor,
  }, {
    name: "Mixture Machine",
    count: "05 Nos",
    img: cement_mixture,
  }, {
    name: "Lift Machine",
    count: "05 Nos",
    img: lift,
  }, {
    name: "Cube Testing Machine",
    count: "04 Nos",
    img: cube_testing,
  }, {
    name: "Cube Mold / Slump",
    count: "Inventory based",
    img: cube_mold,
  }, {
    name: "Hydra Crane 14Ton",
    count: "01 Nos",
    img: crane,
  }, {
    name: "Mud Pump",
    count: "Inventory based",
    img: pump,
  }, {
    name: "Steel Bending Machine",
    count: "04 Nos",
    img: steel_bender,
  }, {
    name: "Steel Cutting Machine",
    count: "04 Nos",
    img: steel_cutter,
  },
];

function Machinery() {
  return (
    <section
      id="machinery"
    >
      <div className="overline">
        <div className="overline-box">
          <span className="overline-star">★</span>
          <p>TOOLS WE USE</p>
        </div>
      </div>

      <h1>
        Our Machinery{" "}
        <span className="orange-text">
          & Equipments
        </span>
      </h1>

      <p>
        Built on strength, powered by Performance
      </p>

      <div>
        <p className='quote'>Equipped with modern machinery and
          reliable resources to execute industrial,
          commercial and infrastructure
          projects efficiently.
        </p>
      </div>

      <div className='generic-grid generic-grid-4'>
        {/* one single item template */}
        {machines.map((machine) => {
          return <div className='grid-item no-border machinery-item'>
            <div className='grid-item-content machinery-content'>
              {/* machine name */}
              <h3>{machine.name}</h3>
              {/* one line machine description */}
              <div className='grid-item-horizontal'>
                <div className='grid-item-image grid-item-right'>
                  {/* image */}
                  <img src={machine.img} />
                </div>
              </div>
            </div>
            <p className='accent'>{machine.count}</p>

          </div>
        })}
      </div>
    </section>
  )
}

export default Machinery;