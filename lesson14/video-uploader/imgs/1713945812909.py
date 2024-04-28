# # import time
import os
import socketio
# import io

SIO = socketio.Client()

REMOTE_SERVER_HOST = 'http://192.168.1.2:8500'
SIO.connect(REMOTE_SERVER_HOST)


# readableStream = open('demonslayer11.mp4', 'rb')
# writableStream = open('haha.mp4', 'wb')
# for _ in readableStream:
#     writableStream.write(readableStream.read())
#     # SIO.emit('from_raspi_new_video_detection', readableStream.read())
# readableStream.close()
# writableStream.close()


# with open('demonslayer11.mp4', 'rb') as fr:
#     with open('huhu.mp4', 'wb') as fw:
#         fw.write(fr.read())



# with open('demonslayer11.mp4', 'rb') as fr:
#     while True:
#         chunk = fr.read(1024)
#         print('----------------------------------------------------------------------------------------------------------------------')
#         print(chunk)
#         if not chunk:
#             break


# video_size = os.path.getsize('demonslayer11.mp4')
with open('demonslayer11.mp4', 'rb') as fr:
    while True:
        chunk = fr.read(2020002)
        # chunk = fr.read(video_size)
        # chunk = fr.read(2048)
        if not chunk:
            break
        SIO.emit('from_raspi_new_video_detection', chunk)



# readableStream = open('demonslayer11.mp4', 'rb')
# for i in readableStream:
#     SIO.emit('from_raspi_new_video_detection', readableStream.read(1024))
# readableStream.close()







# x = open('demonslayer11.mp4', 'rb')
# # y = open('mara.mp4', 'wb')
# # z = io.BytesIO()
# for i in x:
#     # z.write(i)
#     SIO.emit('from_raspi_new_video_detection', i)
# x.close()
# # y.close()