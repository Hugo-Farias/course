import "./MotionTest.scss";
import { useState } from "react";
import { Reorder, useDragControls } from "framer-motion";
import { ReorderIcon } from "./reusable/Icon";

const initialItems = ["🍅 Tomato", "🥒 Cucumber", "🧀 Cheese", "🥬 Lettuce"];

const MotionTest = function () {
  const [items, setItems] = useState(initialItems);

  return (
    <Reorder.Group
      className="motion-test"
      axis="y"
      onReorder={setItems}
      values={items}
    >
      {items.map((item) => {
        const dragcontrols = useDragControls();
        return (
          <Reorder.Item
            key={item}
            value={item}
            transition={{
              duration: 0.1,
              ease: "easeInOut",
            }}
            dragListener={false}
            dragControls={dragcontrols}
          >
            <span>{item}</span>
            <ReorderIcon dragControls={dragcontrols} />
          </Reorder.Item>
        );
      })}
    </Reorder.Group>
  );
};

export default MotionTest;
