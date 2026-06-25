import { toast } from "sonner";

export const INSTAGRAM_HANDLE = "@thebakinghousee";
export const INSTAGRAM_URL = "https://www.instagram.com/thebakinghousee";
export const INSTAGRAM_DM_URL = "https://ig.me/m/thebakinghousee";

export function getInstagramDMLink() {
  return INSTAGRAM_DM_URL;
}

export function openInstagramDM(productName?: string) {
  const message = productName
    ? `Hello The Baking Housee! I'd like to place an order for ${productName}.`
    : `Hello The Baking Housee! I'd like to place an order.`;

  navigator.clipboard.writeText(message).then(() => {
    toast.success("Message copied! 📋", {
      description: "Just paste it in the Instagram chat — long-press the message box and tap Paste.",
      duration: 8000,
    });
  }).catch(() => {
    toast.info("Opening Instagram DM", {
      description: "Type your order in the chat and we'll take it from there!",
      duration: 6000,
    });
  });

  window.open(INSTAGRAM_DM_URL, "_blank");
}
