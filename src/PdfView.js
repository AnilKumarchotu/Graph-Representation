import React from 'react'
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer'

function PdfView() {

    const styles = StyleSheet.create({
        page: {
            flexDirection: 'column',
            padding: 20,
        },
        Header: {
            textAlign: 'center',
            fontSize: 18,
            marginTop: 10,
            borderBottom: '1px solid #ccc',
            paddingBottom: 10,
        },
        footer: {
            position: 'absolute',
            bottom: 30,
            left: 0,
            right: 0,
            textAlign: 'center',
            fontSize: 12,
            padding: 5,
            borderTop: '1px solid #ccc',
        },
        content: {
            flex: 1,
            marginTop: 50, // Ensure content does not overlap header
            marginBottom: 50, // Ensure content does not overlap footer
        },
        text: {
            fontSize: 12,
            margin: 10,
        },
    })

    const Header = () => (
        <View style={styles.header}>
            <Text>My PDF Header</Text>
        </View>
    );

    const Footer = ({ pageNumber }) => (
        <View style={styles.footer}>
          <Text>Page {pageNumber}</Text>
        </View>
      );



    return (
        <>
            <div>PdfView</div>
            <Document>

                <Page size={'A4'} style={styles.page}>
                    <Header />
                    <Text>My First Pdf</Text>
                    <Footer pageNumber={1}/>
                </Page>

                <Page size={'A4'} style={styles.page}>
                    <Header />
                    <Text>My First Pdf</Text>
                    <Footer pageNumber={2}/>
                </Page>


            </Document>
        </>
    )
}

export default PdfView