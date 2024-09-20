import { ModeToggle } from "./mode-toggle";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

export default function ProfileHeader() {
  return (
    <header className="flex h-20 items-center border-b justify-around">
      <div>
        <span className="font-semibold">Drogarias Campeã</span>
      </div>
      <div className="flex gap-3 items-center">
        <ul>
          <Dialog>
            <DialogTrigger className="hover:font-semibold transition-all">Contato</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Entre em contato</DialogTitle>
                <DialogDescription>
                  Para dúvidas, sugestões entre em contato com o desenvolvedor
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-2">
                <div className="bg-muted-foreground/5 flex gap-2 p-4 items-center rounded-md">
                  <h2 className="font-semibold text-sm">Email:</h2>
                  <span className="text-sm">contato@devjackson.tech</span>
                </div>
                <div className="bg-muted-foreground/5 flex gap-2 p-4  items-center rounded-md">
                  <h2 className="font-semibold text-sm">Telefone:</h2>
                  <span className="text-sm">(11)99315-4203</span>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </ul>
        <ModeToggle />
      </div>
    </header>
  )
}