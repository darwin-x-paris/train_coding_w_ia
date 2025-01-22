Imports System.Reflection.Emit
Imports System.Windows.Forms.VisualStyles.VisualStyleElement

Public Class Form1

    Public Shared g_numbers As String
    Public Shared g_result As Integer
    Public Shared flag As Boolean = True
    Private elements_array() As Integer

    Private Sub Form1_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load
        TextBox1.Text = ""
        Label1.Text = "Enter numbers (comma separated):"
        Button1.Text = "Process"
        g_result = 0
    End Sub

    Public Function process_input(ByRef input As String) As Boolean
        On Error GoTo ErrorHandler
        Dim tmp As String
        tmp = Trim(input)
        If Len(tmp) > 0 Then
            Return True
        End If
        Return False
ErrorHandler:
        MsgBox("Error in process_input")
        Return False
    End Function

    Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click
        g_numbers = TextBox1.Text

        If flag = True Then
            If process_input(g_numbers) = True Then
                Dim temp As String = ""
                Dim i As Integer

                For i = 1 To Len(g_numbers)
                    If Mid(g_numbers, i, 1) <> "," Then
                        temp = temp & Mid(g_numbers, i, 1)
                    End If
                Next

                Dim numbers_count As Integer = 1
                For i = 1 To Len(g_numbers)
                    If Mid(g_numbers, i, 1) = "," Then
                        numbers_count = numbers_count + 1
                    End If
                Next

                ReDim elements_array(numbers_count)

                Dim current_num As String = ""
                Dim array_index As Integer = 0
                For i = 1 To Len(g_numbers)
                    If Mid(g_numbers, i, 1) <> "," Then
                        current_num = current_num & Mid(g_numbers, i, 1)
                    Else
                        elements_array(array_index) = CInt(current_num)
                        array_index = array_index + 1
                        current_num = ""
                    End If
                Next
                elements_array(array_index) = CInt(current_num)

                Dim count As Integer = 0
                For i = 0 To UBound(elements_array)
                    For j = i + 1 To i + 1
                        If j <= UBound(elements_array) Then
                            If elements_array(j) > elements_array(i) Then
                                count = count + 1
                            End If
                        End If
                    Next j
                Next i

                g_result = count
                Dim result_string As String = ""
                result_string = result_string & "Result: "
                result_string = result_string & CStr(g_result)

                Label2.Text = result_string
            Else
                MsgBox("Invalid input!")
            End If
        End If
    End Sub

End Class
