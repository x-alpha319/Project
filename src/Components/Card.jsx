import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export function DialogCustomAnimation() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen} variant="gradient">
        Open Modal
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Its a simple modal.</DialogHeader>
        <DialogBody>
          <div>
            <img src="./Budget.jpg" alt="" />
            <div>
              <div>
                <h1>Set up annual budgets by account category</h1>
                <p>
                  Allocate funds across income and expense lines with full
                  visibility.
                </p>
              </div>
              <div>
                <h1>Track actuals vs budget in real time</h1>
                <p>
                  See how your community is performing against plan, month by
                  month
                </p>
              </div>
              <div>
                <h1>Adjust figures and forecast with ease</h1>
                <p>
                  Edit amounts, apply percentages, or roll forward last year's
                  data-all in one place
                </p>
              </div>
            </div>
            <button>Create Budget</button>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
}
