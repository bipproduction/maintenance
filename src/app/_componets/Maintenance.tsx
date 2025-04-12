import {
  Center,
  Container,
  List,
  Text,
  ThemeIcon,
  Title
} from '@mantine/core';
import { IconAlertCircle, IconCheck } from '@tabler/icons-react';
import Head from 'next/head';

export default function Maintenance() {
  return (
    <>
      <Head>
        <title>Pengumuman Maintenance Server</title>
        <meta name="description" content="Informasi maintenance server pada 12-13 April 2025." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Container size="lg" py={50}>
        {/* Judul Utama */}
        <Title order={1}  mb={30}>
          Pengumuman Penting: Maintenance Server pada 12-13 April 2025
        </Title>

        {/* Paragraf Pembuka */}
        <Text size="lg" mb={20}>
          Kepada Seluruh Pengguna dan Mitra Terhormat,
        </Text>

        <Text size="md" mb={20}>
          Kami ingin menginformasikan bahwa dalam rangka menjaga kualitas layanan dan memastikan performa sistem kami tetap optimal,
          tim teknis kami akan melakukan <strong>maintenance rutin pada server utama</strong>. Proses ini akan dilaksanakan pada:
        </Text>

        {/* Informasi Tanggal dan Waktu */}
        <List
          spacing="sm"
          size="md"
          icon={
            <ThemeIcon color="blue" size={24} radius="xl">
              <IconAlertCircle size={16} />
            </ThemeIcon>
          }
        >
          <List.Item>
            <strong>Tanggal:</strong> Sabtu, 12 April 2025
          </List.Item>
          <List.Item>
            <strong>Tanggal:</strong> Minggu, 13 April 2025
          </List.Item>
        </List>

        <Text size="md" mt={20} mb={30}>
          Selama periode ini, beberapa layanan mungkin mengalami gangguan sementara atau tidak dapat diakses. Kami memohon maaf atas
          ketidaknyamanan yang mungkin terjadi dan mengharapkan pengertian serta dukungan dari seluruh pengguna terkait proses penting ini.
        </Text>

        {/* Tujuan Maintenance */}
        <Title order={2} mb={10}>
          Tujuan Maintenance
        </Title>
        <List
          spacing="sm"
          size="md"
          icon={
            <ThemeIcon color="green" size={24} radius="xl">
              <IconCheck size={16} />
            </ThemeIcon>
          }
        >
          <List.Item>Optimalisasi Performa: Memastikan kecepatan dan stabilitas server tetap terjaga demi pengalaman pengguna yang maksimal.</List.Item>
          <List.Item>Peningkatan Keamanan: Melakukan pembaruan keamanan untuk melindungi data dan informasi pengguna dari ancaman potensial.</List.Item>
          <List.Item>Perbaikan Sistem: Mengidentifikasi dan menyelesaikan bug atau masalah teknis yang mungkin memengaruhi kinerja server.</List.Item>
          <List.Item>Pembaruan Fitur: Menambahkan fitur baru yang akan meningkatkan fungsionalitas platform sesuai dengan kebutuhan pengguna.</List.Item>
        </List>

        {/* Yang Perlu Diketahui Pengguna */}
        <Title order={2} mt={30} mb={10}>
          Yang Perlu Diketahui Pengguna
        </Title>
        <List
          spacing="sm"
          size="md"
          icon={
            <ThemeIcon color="orange" size={24} radius="xl">
              <IconAlertCircle size={16} />
            </ThemeIcon>
          }
        >
          <List.Item>
            <strong>Layanan yang Terdampak:</strong> Selama proses ini, layanan seperti login akun, akses dashboard, atau transaksi mungkin tidak tersedia sementara.
          </List.Item>
          <List.Item>
            <strong>Solusi Alternatif:</strong> Jika ada kebutuhan mendesak selama periode ini, silakan hubungi tim dukungan kami melalui email
          </List.Item>
        </List>

        {/* Langkah-Langkah yang Diambil */}
        <Title order={2} mt={30} mb={10}>
          Langkah-Langkah yang Kami Ambil
        </Title>
        <List
          spacing="sm"
          size="md"
          icon={
            <ThemeIcon color="blue" size={24} radius="xl">
              <IconCheck size={16} />
            </ThemeIcon>
          }
        >
          <List.Item>Backup Data: Semua data pengguna telah diamankan sebelum proses maintenance dimulai.</List.Item>
          <List.Item>Monitoring Real-Time: Tim teknis kami akan memantau proses secara real-time untuk memastikan semua berjalan lancar.</List.Item>
        </List>

        {/* Penutup */}
        <Text size="md" mt={30}>
          Kami sangat menghargai kesabaran dan pengertian Anda selama proses ini. Kami yakin bahwa langkah ini akan membawa manfaat jangka panjang bagi semua pengguna,
          termasuk peningkatan performa, keandalan, dan keamanan layanan kami.
        </Text>

        <Text size="md" mt={20}>
          Jika Anda memiliki pertanyaan lebih lanjut atau membutuhkan bantuan, jangan ragu untuk menghubungi tim dukungan kami. Kami siap membantu Anda kapan pun dibutuhkan.
        </Text>

        {/* Footer */}
        <Center mt={50}>
          <Text size="sm" color="dimmed">
            Hormat kami,
            <br />
            <strong>Bali Interaktif Perkasa / Dev Team</strong>
            
          </Text>
        </Center>
      </Container>
    </>
  );
}