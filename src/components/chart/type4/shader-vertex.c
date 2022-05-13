attribute vec4 a_position; // 顶点坐标
uniform mat4 u_matrix;     // 变换矩阵
uniform vec3 u_LPosition;  // 光的位置
attribute vec3 a_normal;

varying vec3 v_LDirection;
varying vec3 v_normal;

void main(){

    vec4 temp = u_matrix * a_position;

    // 表示眼睛距离vec4(0.0,0.0,1.0)的距离
    float dist = 2.0;

    // 使用投影直接计算
    // 此处要注意z轴承显示和实际的方向是相反的
    gl_Position = vec4((dist + 1.0) * temp.x / (dist + temp.z), (dist + 1.0) * temp.y / (dist + temp.z), temp.z, 1.0);

    // 点光源方向
    // 顶点的位置应该使用计算过的
    v_LDirection = vec3(gl_Position) - u_LPosition;

    v_normal = vec3(u_matrix * vec4(a_normal, 1));

}
