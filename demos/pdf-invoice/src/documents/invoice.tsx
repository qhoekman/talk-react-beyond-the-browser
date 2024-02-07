import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer';
import React from 'react';
import { Logo } from '../assets/logo';

Font.register({
  family: 'Open Sans',
  fonts: [
    {
      src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf',
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf',
      fontWeight: 600,
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Open Sans',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 30,
    fontSize: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  logo: {
    marginBottom: 20,
  },

  table: {
    marginTop: 10,
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 0,
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row',
  },
  tableColHeader: {
    width: '33%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
  },
  tableCol: {
    width: '33%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
  },
  tableCellHeader: {
    margin: 5,
    fontSize: 10,
    color: '#666',
    fontWeight: 'bold',
  },
  tableCell: {
    margin: 5,
    fontSize: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    left: 30,
    right: 30,
    bottom: 20,
  },
  divider: {
    borderTopWidth: 2,
    borderTopStyle: 'solid',
    borderTopColor: '#000000',
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    gap: 4,
  },
  w__1of2: {
    width: '50%',
  },
  w__1of3: {
    width: '33.333333%',
  },
  w__2of3: {
    width: '66.666666%',
  },
  w__1of4: {
    width: '25%',
  },
  mb__4: {
    marginBottom: 16,
  },
  gap__md: {
    gap: 4,
  },
  gap__lg: {
    gap: 8,
  },
  gap__xl: {
    gap: 10,
  },
  gap__2xl: {
    gap: 20,
  },
  gap__3xl: {
    gap: 30,
  },
  gap__4xl: {
    gap: 40,
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  col: {
    flexDirection: 'column',
  },
  totals: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  text__right: {
    textAlign: 'right',
  },
  text__sm: {
    fontSize: 10,
  },
  text__md: {
    fontSize: 12,
  },
  text__lg: {
    fontSize: 16,
  },
  text__xl: {
    fontSize: 20,
  },
  text__2xl: {
    fontSize: 24,
  },
  strong: {
    fontWeight: 800,
  },
});

export const InvoiceDocument: React.FC = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.logo}>
        <Logo width={92} height={92} />
        {/* <Text style={[styles.text__2xl, styles.strong]}>Anvil Co</Text> */}
      </View>
      <View style={[styles.row, styles.spaceBetween]}>
        <View style={styles.col}>
          <Text style={[styles.text__lg, styles.strong, styles.mb__4]}>
            Client name
          </Text>
          <View style={styles.row}>
            <Text>Invoice Date:</Text>
            <Text style={styles.strong}>May 24th, 2024</Text>
          </View>
          <View style={styles.row}>
            <Text>Invoice No:</Text>
            <Text style={styles.strong}>#12345</Text>
          </View>
        </View>
        <View style={styles.col}>
          <Text>Anvil Co</Text>
          <Text>123 Main Street</Text>
          <Text>San Francisco CA, 94103</Text>
          <Text>hello@useanvil.com</Text>
        </View>
      </View>

      <View style={styles.table}>
        {/* Headers */}
        <View style={styles.tableRow}>
          <View style={[styles.tableColHeader, styles.w__1of2]}>
            <Text style={styles.tableCellHeader}>DESCRIPTION</Text>
          </View>
          <View style={[styles.tableColHeader, styles.w__1of4]}>
            <Text style={[styles.tableCellHeader, styles.text__right]}>
              PRICE
            </Text>
          </View>
          <View style={[styles.tableColHeader, styles.w__1of4]}>
            <Text style={[styles.tableCellHeader, styles.text__right]}>
              QTY
            </Text>
          </View>
        </View>
        {/* Data */}
        <View style={styles.tableRow}>
          <View style={[styles.tableCol, styles.w__1of2]}>
            <Text style={styles.tableCell}>Blue large widgets</Text>
          </View>
          <View style={[styles.tableCol, styles.w__1of4]}>
            <Text style={[styles.tableCell, styles.text__right]}>$15.00</Text>
          </View>
          <View style={[styles.tableCol, styles.w__1of4]}>
            <Text style={[styles.tableCell, styles.text__right]}>2</Text>
          </View>
        </View>
        {/* ... More rows */}
      </View>
      <View style={styles.totals}>
        <View style={[styles.col, styles.w__1of4, styles.text__sm]}>
          <View style={[styles.row, styles.spaceBetween]} data-size="lg">
            <Text style={styles.strong}>Subtotal:</Text>
            <Text>$30.00</Text>
          </View>
          <View style={[styles.row, styles.spaceBetween]}>
            <Text style={styles.strong}>Tax (10%):</Text>
            <Text>$3.00</Text>
          </View>
          <View style={[styles.row, styles.spaceBetween]}>
            <Text style={[styles.strong, styles.text__md]}>Total:</Text>
            <Text style={[styles.text__md]}>$33.00</Text>
          </View>
        </View>
      </View>
      <View style={styles.divider} />
      <View fixed style={[styles.footer, styles.text__sm]}>
        <Text>Payment is due within 15 days. Thank you for your business.</Text>
        <Text
          render={({ pageNumber, totalPages }) =>
            `Page ${pageNumber} / ${totalPages}`
          }
        />
      </View>
    </Page>
  </Document>
);
