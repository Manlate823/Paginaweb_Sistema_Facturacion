# MANLATE Facturación Profesional — Página web

Código listo para publicar en GitHub Pages. Incluye la página completa, el logo, el contacto por WhatsApp y el archivo descargable de MANLATE Facturación Profesional V4.8.8.

La página incluye **modo claro y modo oscuro**. El visitante puede cambiarlo desde el botón del menú y su preferencia queda guardada automáticamente en el navegador.

## Publicar en GitHub

1. Crea un repositorio nuevo en GitHub.
2. Descomprime este ZIP.
3. Sube **todo el contenido** de la carpeta, incluyendo `.github`.
4. Confirma los archivos en la rama `main`.
5. En GitHub abre **Settings → Pages**.
6. En **Source**, selecciona **GitHub Actions**.
7. Espera que termine la acción llamada **Publicar página MANLATE**.

GitHub mostrará el enlace público de la página cuando finalice.

## Cambiar el programa descargable

Abre el archivo:

`assets/config.js`

Busca esta línea:

`downloadUrl: "PEGA_AQUI_TU_LINK_DE_DESCARGA"`

Reemplaza solamente `PEGA_AQUI_TU_LINK_DE_DESCARGA` por tu enlace. Todos los botones de descarga se actualizarán automáticamente. Puedes usar enlaces de MediaFire, Google Drive, GitHub u otro servidor.

## Cambiar WhatsApp

El número configurado actualmente es `+1 829 672-5983`. Para cambiarlo, busca `18296725983` dentro de `index.html` y reemplázalo por el número nuevo con código de país, sin espacios ni guiones.
