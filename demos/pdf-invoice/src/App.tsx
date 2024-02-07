import { PDFViewer } from '@react-pdf/renderer';
import { InvoiceDocument } from './documents/invoice';

function App() {
  return (
    <PDFViewer>
      <InvoiceDocument />
    </PDFViewer>
  );
}

export default App;
