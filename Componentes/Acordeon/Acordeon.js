export const Accordion = ({ title, children }) => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <div className="accordion-wrapper">
      <div
        className={`accordion-title ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}
      >
        {title}
      </div>
      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </div>
  );
};

//Styles
// body {
//   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
//   line-height: 1.4;
//   padding: 30px;
// }
// .wrapper {
//   width: 600px;
//   margin: 0 auto;
// }
// .accordion-wrapper + * {
//   margin-top: 0.5em;
// }
// .accordion-item {
//   overflow: hidden;
//   transition: max-height 0.3s cubic-bezier(1, 0, 1, 0);
//   height: auto;
//   max-height: 9999px;
// }
// .accordion-item.collapsed {
//   max-height: 0;
//   transition: max-height 0.35s cubic-bezier(0, 1, 0, 1);
// }
// .accordion-title {
//   font-weight: 600;
//   cursor: pointer;
//   color: #666;
//   padding: 0.5em 1.5em;
//   border: solid 1px #ccc;
//   border-radius: 1.5em;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// }
// .accordion-title::after {
//   content: "";
//   width: 0;
//   height: 0;
//   border-left: 5px solid transparent;
//   border-right: 5px solid transparent;
//   border-top: 5px solid currentColor;
// }
// .accordion-title:hover,
// .accordion-title.open {
//   color: black;
// }
// .accordion-title.open::after {
//   content: "";
//   border-top: 0;
//   border-bottom: 5px solid;
// }
// .accordion-content {
//   padding: 1em 1.5em;
// }
